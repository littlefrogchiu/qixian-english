// 由 docs/data.js 產生 Word 教材（學生版／教師版）到桌面課程資料夾。需要：npm install docx qrcode
const fs = require('fs');
const QR = require('qrcode');
const D = require('docx');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType,
  ShadingType, BorderStyle, ImageRun, PageBreak, LevelFormat, Footer, PageNumber } = D;

global.window = {};
require('C:/MyProjects/qixian-english/docs/data.js');
require('C:/MyProjects/qixian-english/docs/vocab.js');
const U = window.UNITS, V = window.VOCAB;
const SITE = 'https://littlefrogchiu.github.io/qixian-english/';
const OUT = 'C:/Users/littl/Desktop/115學年 課程/籃班夜輔/';
const L = 'ABCD';
const ZH = 'Microsoft JhengHei', EN = 'Times New Roman';
const W = 9906 - 2 * 1134; // A4 content width (DXA), 2cm margins

const run = (text, o = {}) => new TextRun({ text, font: { ascii: o.en ? EN : ZH, hAnsi: o.en ? EN : ZH, eastAsia: ZH }, size: o.size, bold: o.bold, color: o.color, italics: o.it, underline: o.u ? {} : undefined });
const para = (children, o = {}) => new Paragraph({ children: Array.isArray(children) ? children : [children], spacing: { after: o.after ?? 100, line: o.line }, alignment: o.align, indent: o.indent, shading: o.shade ? { type: ShadingType.CLEAR, fill: o.shade, color: 'auto' } : undefined, border: o.border, numbering: o.num, keepNext: o.keepNext });
const h = (text, level) => new Paragraph({ heading: level, children: [run(text)], spacing: { before: 200, after: 120 }, keepNext: true });
// "<b>x</b>" → bold runs
const rich = (s, o = {}) => s.split(/(<b>.*?<\/b>)/).filter(Boolean).map(p => p.startsWith('<b>') ? run(p.slice(3, -4), { ...o, bold: true, color: '1F4E79' }) : run(p, o));

function alts(v) {
  const a = v.replace(/\(.*?\)/g, '').split('/').map(k => k.replace(/[?.!]/g, '').trim()).filter(Boolean);
  if (a.length === 2 && !a[0].includes(' ') && a[1].includes(' ')) a[0] += ' ' + a[1].split(' ').slice(1).join(' ');
  return a;
}
function vocabRe(i) {
  const keys = new Set();
  V[i].forEach(v => alts(v).forEach(k => { if (k.length > 1 && !/^-/.test(k)) keys.add(k); }));
  const list = [...keys].sort((a, b) => b.length - a.length).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+'));
  return new RegExp("\\b(" + list.join('|') + ")(s|es|d|ed|ing|er|est|ly|'s)?\\b", 'gi');
}
function articleRuns(text, re) {
  const out = []; let last = 0, m; re.lastIndex = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(run(text.slice(last, m.index), { en: true, size: 25 }));
    out.push(run(m[0], { en: true, size: 25, bold: true, u: true }));
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(run(text.slice(last), { en: true, size: 25 }));
  return out;
}
const words = u => u.article.join(' ').split(/\s+/).filter(Boolean).length;

function mcq(q, o, a, why, teacher, tag) {
  const ps = [para([...(tag ? [run(tag + '　', { bold: true, color: 'E8742A' })] : []), run(q, { en: true, bold: true, size: 23 })], { keepNext: true, after: 60 })];
  const short = o.every(x => x.length <= 14);
  if (short) ps.push(para(o.map((x, k) => run(`(${L[k]}) ${x}` + (k < 3 ? '　　　' : ''), { en: true, size: 23 })), { indent: { left: 300 }, after: 120 }));
  else o.forEach((x, k) => ps.push(para(run(`(${L[k]}) ${x}`, { en: true, size: 23 }), { indent: { left: 300 }, after: k === 3 ? 120 : 20, keepNext: k < 3 })));
  if (teacher) ps.push(para([run(`答案 (${L[a]})｜`, { bold: true, color: '1F8A4C' }), run(why, { size: 20 })], { shade: 'EEF6F0', after: 160 }));
  return ps;
}
function cell(children, w, o = {}) {
  return new TableCell({ width: { size: w, type: WidthType.DXA }, shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill, color: 'auto' } : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 }, children: (Array.isArray(children) ? children : [children]).map(c => c instanceof Paragraph ? c : para(c, { after: 0 })) });
}
function table(cols, rows, header) {
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: cols,
    rows: [new TableRow({ tableHeader: true, children: header.map((t, k) => cell(run(t, { bold: true, size: 20 }), cols[k], { fill: 'DCE6F1' })) }),
      ...rows.map(r => new TableRow({ children: r.map((c, k) => cell(typeof c === 'string' ? run(c, { size: 20, en: /^[\x00-\x7F]/.test(c) }) : c, cols[k])) }))] });
}

async function build(teacher) {
  const qrs = await Promise.all(U.map(u => QR.toBuffer(SITE + 'battle.html?u=' + u.id, { width: 300, margin: 1 })));
  const kids = [];
  // cover
  kids.push(para(run('七賢英語閱讀・文法・對戰', { size: 44, bold: true, color: '1F4E79' }), { align: AlignmentType.CENTER, after: 120 }));
  kids.push(para(run(`會考 C → B 銜接教材｜康軒版七上～八下｜${teacher ? '教師版（含解答）' : '學生版'}`, { size: 24 }), { align: AlignmentType.CENTER, after: 300 }));
  kids.push(h('設計說明', HeadingLevel.HEADING_2));
  [
    '對象：會考英語程度介於 C（待加強）與 B（基礎）之間的學生。依會考官網「基礎」等級描述設計——能理解所學字詞的基本意義與基本句型，理解與自身經驗相關、敘述直接的日常生活文章，並擷取明確陳述的重要訊息。',
    '範圍：兩課為一單元（七上、七下的 GR 併入 L1・L2），共 12 單元。文章字詞取自康軒版課本後附錄字詞例句表的累積範圍（超出範圍的字 ≤ 6%，多為 shoes、rain 等基本字），文法依「三年文法架構」該單元內容。',
    '文章：七年級約 110–120 字、八年級約 150–160 字；主題為七賢國中（鼓山區美術館特區、籃球隊傳統）、高雄生活與青少年話題。文中粗體底線字為本單元課本單字。',
    '題目：每篇 1 題閱讀測驗，難度循序漸進（七上：主旨／標題 → 七下：細節、NOT 題、換句話說 → 八上：因果推論 → 八下：寫作目的、作者意圖），另有 3 個重點文法各附 1 題練習。',
    `單字對戰：每單元附 QR code，手機或平板掃描即可進入 1 vs 1 對戰（一輪 5 題：4 題出自文章＋1 題單字應用）。網站：${SITE}`,
  ].forEach(t => kids.push(para(run(t, { size: 21 }), { num: { reference: 'bul', level: 0 }, after: 80 })));
  kids.push(h('單元總覽', HeadingLevel.HEADING_2));
  kids.push(table([900, 1500, 3700, 1000, 2538], U.map(u => [
    'Unit ' + u.id, run(`${u.book} ${u.lessons}`, { size: 20 }), run(u.grammarScope, { size: 19 }), String(words(u)), run(u.title, { size: 20, en: true })]),
    ['單元', '冊次・課次', '文法範圍', '字數', '文章標題']));

  U.forEach((u, i) => {
    kids.push(new Paragraph({ children: [new PageBreak()] }));
    kids.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [run(`Unit ${u.id}｜`), run(u.title, { en: true })], spacing: { after: 80 } }));
    kids.push(para(run(`${u.book} ${u.lessons}　｜　會考 ${u.level}　｜　${u.genre}　｜　${words(u)} words`, { size: 20, color: '5D6675' }), { after: 40 }));
    kids.push(para(run(`文法範圍：${u.grammarScope}`, { size: 20, color: '5D6675' }), { after: 160,
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'E8742A', space: 4 } } }));
    kids.push(h('📖 Reading', HeadingLevel.HEADING_2));
    const re = vocabRe(i);
    u.article.forEach(p => kids.push(para(articleRuns(p, re), { after: 140, line: 340 })));
    kids.push(h(`閱讀測驗（${u.reading.type}）`, HeadingLevel.HEADING_2));
    kids.push(...mcq(u.reading.q, u.reading.o, u.reading.a, u.reading.ex, teacher));
    kids.push(h('重點文法', HeadingLevel.HEADING_2));
    u.grammar.forEach((g, k) => {
      kids.push(h(`文法 ${k + 1}｜${g.t}`, HeadingLevel.HEADING_3));
      kids.push(para(rich(g.d, { size: 21 }), { after: 60 }));
      g.ex.forEach(e => kids.push(para(rich(e, { en: true, size: 22 }), { num: { reference: 'bul', level: 0 }, after: 40 })));
      kids.push(para([], { after: 40 }));
      kids.push(...mcq(g.q, g.o, g.a, g.why, teacher, '練習'));
    });
    // QR
    kids.push(new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [1900, W - 1900], rows: [new TableRow({ children: [
      cell(new Paragraph({ children: [new ImageRun({ type: 'png', data: qrs[i], transformation: { width: 100, height: 100 } })] }), 1900),
      cell([para(run(`⚔️ Unit ${u.id} 單字對戰 1 vs 1`, { bold: true, size: 22 }), { after: 60 }),
        para(run('用手機或平板掃描 QR code：一人按「建立房間」，另一人掃對方畫面上的 QR code 加入。一輪 5 題，答對越快分數越高。', { size: 19 }), { after: 40 }),
        para(run(SITE + 'battle.html?u=' + u.id, { size: 17, en: true, color: '1F4E79' }), { after: 0 })], W - 1900, { fill: 'FDF3EA' })] })] }));
    if (teacher) {
      kids.push(h('對戰題庫（每輪隨機抽 4 題文章題＋1 題應用題）', HeadingLevel.HEADING_3));
      const rows = [...u.battle.text.map(x => ['文章', x]), ...u.battle.apply.map(x => ['應用', x])].map(([t, x]) =>
        [t, run(x.q, { en: true, size: 19 }), run(x.o[0], { en: true, size: 19, bold: true, color: '1F8A4C' }), run(x.o.slice(1).join(' / '), { en: true, size: 18, color: '5D6675' })]);
      kids.push(table([700, 5000, 1500, 2438], rows, ['類型', '題目', '正解', '誘答選項']));
    }
  });

  if (!teacher) {
    kids.push(new Paragraph({ children: [new PageBreak()] }));
    kids.push(h('解答', HeadingLevel.HEADING_1));
    kids.push(table([1400, 2060, 2060, 2060, 2058], U.map(u => ['Unit ' + u.id, `(${L[u.reading.a]})`, ...u.grammar.map(g => `(${L[g.a]})`)]),
      ['單元', '閱讀測驗', '文法 1', '文法 2', '文法 3']));
  }

  const doc = new Document({
    creator: 'littlefrog', title: '七賢英語閱讀・文法・對戰',
    styles: {
      default: { document: { run: { font: { ascii: ZH, hAnsi: ZH, eastAsia: ZH }, size: 22 } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 34, bold: true, color: '1F4E79', font: { eastAsia: ZH } }, paragraph: { spacing: { before: 0, after: 120 }, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 26, bold: true, color: '1F4E79', font: { eastAsia: ZH } }, paragraph: { spacing: { before: 240, after: 100 }, outlineLevel: 1 } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 22, bold: true, color: 'E8742A', font: { eastAsia: ZH } }, paragraph: { spacing: { before: 160, after: 60 }, outlineLevel: 2 } },
      ],
    },
    numbering: { config: [{ reference: 'bul', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 260 } } } }] }] },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [run('七賢英語閱讀・文法・對戰　', { size: 16, color: '888888' }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: '888888' })] })] }) },
      children: kids,
    }],
  });
  const file = OUT + `七賢英語閱讀教材_${teacher ? '教師版' : '學生版'}.docx`;
  fs.writeFileSync(file, await Packer.toBuffer(doc));
  console.log('wrote', file);
}
(async () => { await build(false); await build(true); })();
