// 由 docs/ 的資料產生 Word 教材（學生版／教師版）到桌面課程資料夾。
// 需要：npm install docx qrcode（以 NODE_PATH 指到 node_modules）、python + pymupdf（畫倒反答案圖與封面圖）
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const QR = require('qrcode');
const D = require('docx');
const { Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  ImageRun, PageBreak, Footer, PageNumber, TabStopType, VerticalAlign, HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom,
  HorizontalPositionAlign, VerticalPositionAlign, TextWrappingType, TableLayoutType } = D;

const DOCS = path.join(__dirname, '..', 'docs');
global.window = {};
['vocab.js', 'data.js', 'extra.js'].forEach(f => require(path.join(DOCS, f)));
const T = require(path.join(DOCS, 'vocabtools.js'));
const U = window.UNITS, V = window.VOCAB;
const SITE = 'https://littlefrogchiu.github.io/qixian-english/';
const OUT = 'C:/Users/littl/Desktop/115學年 課程/籃班夜輔/';
const TMP = path.join(__dirname, '.build'); fs.mkdirSync(TMP, { recursive: true });
const L = 'ABCD';
const ZH = 'Microsoft JhengHei', EN = 'Times New Roman', HEAD = 'Arial Black', IMPACT = 'Impact';
const PAGE_W = 11906, PAGE_H = 16838, MX = 1050, MY = 900, W = PAGE_W - 2 * MX;

/* ---------- 小工具 ---------- */
const font = f => ({ ascii: f, hAnsi: f, eastAsia: ZH, cs: f });
const run = (text, o = {}) => new TextRun({ text, font: font(o.f || (o.en ? EN : ZH)), size: o.size || 21, bold: o.bold, italics: o.it,
  underline: o.u ? { type: 'single' } : undefined, color: o.color, characterSpacing: o.sp });
const P = (children, o = {}) => new Paragraph({ children: [].concat(children), alignment: o.align, keepNext: o.keepNext, keepLines: o.keepLines,
  spacing: { before: o.before || 0, after: o.after == null ? 60 : o.after, line: o.line || 276 }, indent: o.indent, tabStops: o.tabs,
  border: o.border, shading: o.shade ? { type: ShadingType.CLEAR, fill: o.shade, color: 'auto' } : undefined, pageBreakBefore: o.pb });
const noBorder = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const NB = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideHorizontal: noBorder, insideVertical: noBorder };
function cell(children, w, o = {}) {
  return new TableCell({ width: { size: w, type: WidthType.DXA }, verticalAlign: o.v || VerticalAlign.CENTER,
    shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill, color: 'auto' } : undefined,
    borders: o.borders, margins: { top: o.mt ?? 60, bottom: o.mb ?? 60, left: o.ml ?? 110, right: o.mr ?? 110 },
    columnSpan: o.span, children: [].concat(children) });
}
const table = (cols, rows, o = {}) => new Table({ width: { size: cols.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: cols,
  layout: TableLayoutType.FIXED, borders: o.borders, rows });

// "<b>x</b>" → 粗體片段（文法說明用）
const rich = (s, o = {}) => s.split(/(<b>.*?<\/b>)/).filter(Boolean).map(p => p.startsWith('<b>') ? run(p.slice(3, -4), { ...o, bold: true }) : run(p, o));
// 英文文章：課本單字加底線（不加粗）
function enRuns(text, re, o) {
  const out = []; let last = 0, m; re.lastIndex = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(run(text.slice(last, m.index), o));
    out.push(run(m[0], { ...o, u: true }));
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(run(text.slice(last), o));
  return out;
}
// 中文翻譯：{ } 內加底線
const zhRuns = (s, o) => s.split(/(\{.*?\})/).filter(Boolean).map(p => p.startsWith('{') ? run(p.slice(1, -1), { ...o, u: true }) : run(p, o));

/* ---------- 圖片：封面、倒反答案 ---------- */
function renderSvg(svgPath, pngPath, dpi) {
  execFileSync('python', ['-c', `import pymupdf,sys
d=pymupdf.open(sys.argv[1]); pdf=pymupdf.open('pdf', d.convert_to_pdf()); pdf[0].get_pixmap(dpi=int(sys.argv[3])).save(sys.argv[2])`, svgPath, pngPath, String(dpi)]);
  return fs.readFileSync(pngPath);
}
function keyImage(u, ans) {
  const txt = ans.map((a, k) => `${k + 1}.${L[a]}`).join('  ');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="330" height="44" viewBox="0 0 330 44">
    <g transform="rotate(180 165 22)"><rect x="1" y="1" width="328" height="42" rx="6" fill="#fff" stroke="#000" stroke-width="1.2"/>
    <text x="10" y="17" font-family="Helvetica" font-weight="bold" font-size="10">UNIT ${u.id} ANSWER KEY</text>
    <text x="10" y="34" font-family="Helvetica" font-size="12.5">${txt}</text></g></svg>`;
  const f = path.join(TMP, `key${u.id}.svg`); fs.writeFileSync(f, svg);
  return renderSvg(f, path.join(TMP, `key${u.id}.png`), 300);
}
const coverPng = renderSvg(path.join(__dirname, 'cover.svg'), path.join(TMP, 'cover.png'), 200);

/* ---------- 題目 ---------- */
// 選項排版：都短 → 一行四個；中等 → 兩欄；長 → 一行一個
function optionParas(o, size) {
  const max = Math.max(...o.map(x => x.length));
  const lab = (x, k) => [run(`(${L[k]}) `, { en: true, size }), run(x, { en: true, size })];
  const ind = { left: 620 };
  if (max <= 13) {
    const q = Math.floor((W - 620) / 4);
    return [P(o.flatMap((x, k) => [...(k ? [run('\t', { size })] : []), ...lab(x, k)]), { indent: ind, tabs: [1, 2, 3].map(i => ({ type: TabStopType.LEFT, position: 620 + q * i })), after: 40 })];
  }
  if (max <= 34) {
    const half = 620 + Math.floor((W - 620) / 2);
    return [0, 2].map(s => P([...lab(o[s], s), run('\t', { size }), ...lab(o[s + 1], s + 1)], { indent: ind, tabs: [{ type: TabStopType.LEFT, position: half }], after: s ? 40 : 0, keepNext: !s }));
  }
  return o.map((x, k) => P(lab(x, k), { indent: ind, after: k === 3 ? 40 : 0, keepNext: k < 3 }));
}
function question(n, q, o, a, teacher, o2 = {}) {
  const size = o2.size || 21;
  const blank = teacher ? `(  ${L[a]}  )` : '(      )';
  const lines = q.split('\n');
  const tag = o2.tag ? [run(o2.tag + ' ', { size: 16, bold: true })] : [];
  const ps = [P([run(blank + ' ', { en: true, size, bold: teacher }), run(n + '. ', { en: true, size, bold: true }), ...tag, run(lines[0], { en: true, size })],
    { indent: { left: 620, hanging: 620 }, keepNext: true, after: lines.length > 1 ? 0 : 30, before: o2.before || 0 })];
  lines.slice(1).forEach((ln, k) => ps.push(P(run(ln, { en: true, size }), { indent: { left: 620 + 330 }, keepNext: true, after: k === lines.length - 2 ? 30 : 0 })));
  return ps.concat(optionParas(o, size));
}

/* ---------- 版面元件 ---------- */
function band(left, right, sub) {
  return table([1900, W - 1900], [new TableRow({ children: [
    cell(P(run(left, { f: HEAD, size: 30, color: 'FFFFFF' }), { align: AlignmentType.CENTER, after: 0 }), 1900, { fill: '000000' }),
    cell([P(run(right, { f: HEAD, size: 26 }), { after: 0 }), ...(sub ? [P(run(sub, { size: 16 }), { after: 0 })] : [])], W - 1900,
      { borders: { top: { style: BorderStyle.SINGLE, size: 18, color: '000000' }, bottom: { style: BorderStyle.SINGLE, size: 18, color: '000000' }, left: noBorder, right: { style: BorderStyle.SINGLE, size: 18, color: '000000' } } })
  ] })], { borders: NB });
}
const label = (en, zh) => P([run(en, { f: HEAD, size: 20 }), run('  ' + zh, { size: 18, bold: true })],
  { before: 140, after: 70, keepNext: true, border: { left: { style: BorderStyle.SINGLE, size: 36, color: '000000', space: 6 } } });

/* ---------- 單元兩頁 ---------- */
async function unitPages(u, i, teacher) {
  const re = T.vocabRegex(V[i], u.id);
  const eng = { en: true, size: u.id <= 6 ? 29 : 27 };
  const ans = [u.reading.a, ...u.grammar.flatMap(g => [g.a, g.q2.a])];
  const kids = [];
  // ---- 第一頁
  kids.push(P([], { pb: true, after: 0, line: 240 }));
  kids.push(band('UNIT ' + u.id, u.title, `${u.book} ${u.lessons}　｜　${u.genre}　｜　${u.article.join(' ').split(/\s+/).length} words`));
  kids.push(label('READING', '閱讀'));
  // 段落首行縮排（作文格式）；書信稱呼、署名、日記日期等短行不縮排
  const ind = (en, w) => en.length < 40 ? undefined : { firstLine: w };
  u.article.forEach(p => kids.push(P(enRuns(p, re, eng), { after: 110, line: 312, indent: ind(p, 560) })));
  kids.push(label('QUESTION', '閱讀測驗'));
  kids.push(...question(1, u.reading.q, u.reading.o, u.reading.a, teacher, { size: 23 }));
  kids.push(label('TRANSLATION', '中文翻譯'));
  u.zh.forEach((p, k) => kids.push(P(zhRuns(p, { size: 21 }), { after: 70, line: 320, indent: ind(u.article[k], 420) })));
  // ---- 第二頁
  kids.push(P([], { pb: true, after: 0, line: 240 }));
  kids.push(band('UNIT ' + u.id, 'GRAMMAR FOCUS', '重點文法｜' + u.grammarScope));
  u.grammar.forEach((g, k) => {
    kids.push(P([run(`${k + 1}  `, { f: HEAD, size: 22 }), run(g.t, { size: 21, bold: true })],
      { before: k ? 240 : 140, after: 50, keepNext: true, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '000000', space: 2 } } }));
    kids.push(P(rich(g.d, { size: 20 }), { after: 40, keepNext: true, line: 280 }));
    kids.push(P([run('例  ', { size: 17, bold: true }), ...rich(g.ex[0], { en: true, size: 22 })], { after: 70, keepNext: true, indent: { left: 200 } }));
    kids.push(...question(2 + k * 2, g.q, g.o, g.a, teacher, { tag: '[Basic]', size: 22 }));
    kids.push(...question(3 + k * 2, g.q2.q, g.q2.o, g.q2.a, teacher, { tag: '[會考]', before: 60, size: 22 }));
  });
  // 網站資訊
  const qr = await QR.toBuffer(`${SITE}play.html?mode=solo&u=${u.id}`, { width: 260, margin: 1 });
  kids.push(P([], { after: 0, before: 120, line: 200 }));
  kids.push(table([1250, W - 1250 - 3500], [new TableRow({ children: [
    cell(P(new ImageRun({ type: 'png', data: qr, transformation: { width: 62, height: 62 } }), { after: 0 }), 1250, { ml: 60, mr: 60 }),
    cell([P(run('PLAY & WATCH ONLINE', { f: HEAD, size: 17 }), { after: 10 }),
      P(run(`${SITE}  →  Unit ${u.id}`, { en: true, size: 15 }), { after: 10 }),
      P(run('單字英翻中（聽發音）・例句填空・1 vs 1 對戰・NBA 延伸影片', { size: 15 }), { after: 0 })], W - 1250 - 3500, { ml: 80 })
  ] })], { borders: { top: { style: BorderStyle.SINGLE, size: 8, color: '000000' }, bottom: { style: BorderStyle.SINGLE, size: 8, color: '000000' },
    left: { style: BorderStyle.SINGLE, size: 8, color: '000000' }, right: { style: BorderStyle.SINGLE, size: 8, color: '000000' }, insideHorizontal: noBorder, insideVertical: noBorder } }));
  // 倒反答案：固定在頁底右下角
  kids.push(P(new ImageRun({ type: 'png', data: keyImage(u, ans), transformation: { width: 270, height: 36 },
    floating: { horizontalPosition: { relative: HorizontalPositionRelativeFrom.MARGIN, align: HorizontalPositionAlign.RIGHT },
      verticalPosition: { relative: VerticalPositionRelativeFrom.MARGIN, align: VerticalPositionAlign.BOTTOM },
      wrap: { type: TextWrappingType.NONE }, behindDocument: false, allowOverlap: true } }), { after: 0, line: 200 }));
  return kids;
}

/* ---------- 封面、目錄 ---------- */
function cover(teacher) {
  const k = [];
  k.push(P(run('QIXIAN HOOPS', { f: IMPACT, size: 104, sp: 20 }), { align: AlignmentType.CENTER, after: 0, line: 240, before: 200 }));
  k.push(P(run('ENGLISH', { f: IMPACT, size: 104, sp: 60 }), { align: AlignmentType.CENTER, after: 60, line: 240,
    border: { bottom: { style: BorderStyle.SINGLE, size: 36, color: '000000', space: 8 } } }));
  k.push(P(run('READING  ·  GRAMMAR  ·  GAME ON', { f: HEAD, size: 26, sp: 30 }), { align: AlignmentType.CENTER, after: 120 }));
  k.push(P(new ImageRun({ type: 'png', data: coverPng, transformation: { width: 560, height: 467 } }), { align: AlignmentType.CENTER, after: 100 }));
  k.push(P(run('Read hard. Play hard. Level up from C to B!', { en: true, size: 30, it: true }), { align: AlignmentType.CENTER, after: 40 }));
  k.push(P(run('Grades 7–8  ·  12 Units  ·  24 Lessons', { f: HEAD, size: 20 }), { align: AlignmentType.CENTER, after: 40 }));
  if (teacher) k.push(P(run("TEACHER'S EDITION", { f: HEAD, size: 26, color: 'FFFFFF' }), { align: AlignmentType.CENTER, shade: '000000', after: 40 }));
  k.push(P(run('Kaohsiung Municipal Qixian Junior High School  ·  Basketball Team', { en: true, size: 20 }), { align: AlignmentType.CENTER, after: 700 }));
  const line = { style: BorderStyle.SINGLE, size: 12, color: '000000' };
  const fld = (lab, w) => [cell(P(run(lab, { f: HEAD, size: 24 }), { after: 0, align: AlignmentType.RIGHT }), 1150, { ml: 0, mr: 90, v: VerticalAlign.BOTTOM, mb: 20 }),
    cell(P(run(' ', { size: 24 }), { after: 0 }), w, { v: VerticalAlign.BOTTOM, borders: { bottom: line, top: noBorder, left: noBorder, right: noBorder }, ml: 0 })];
  k.push(table([1150, 2000, 1150, 3200, 1150, 1150], [new TableRow({ height: { value: 620, rule: 'atLeast' }, children: [...fld('Class', 2000), ...fld('Name', 3200), ...fld('No.', 1150)] })], { borders: NB }));
  return k;
}
function contents() {
  const k = [];
  k.push(P(run('CONTENTS', { f: HEAD, size: 44 }), { after: 20 }));
  k.push(P(run('12 Units  ·  Each unit: Reading + Translation (page 1)  /  Grammar + Answer Key (page 2)', { en: true, size: 18 }), { after: 200,
    border: { bottom: { style: BorderStyle.SINGLE, size: 18, color: '000000', space: 6 } } }));
  const cols = [1150, 1700, 3150, W - 1150 - 1700 - 3150 - 900, 900];
  const th = t => cell(P(run(t, { f: HEAD, size: 17, color: 'FFFFFF' }), { after: 0 }), 0, { fill: '000000' });
  const head = new TableRow({ tableHeader: true, children: ['UNIT', 'BOOK', 'TITLE', 'GRAMMAR', 'PAGE'].map((t, j) => cell(P(run(t, { f: HEAD, size: 17, color: 'FFFFFF' }), { after: 0 }), cols[j], { fill: '000000' })) });
  const rows = U.map((u, i) => new TableRow({ height: { value: 860, rule: 'atLeast' }, children: [
    cell(P(run(String(u.id).padStart(2, '0'), { f: IMPACT, size: 40 }), { after: 0, align: AlignmentType.CENTER }), cols[0]),
    cell([P(run(u.book, { size: 19, bold: true }), { after: 0 }), P(run(u.lessons, { size: 16 }), { after: 0 })], cols[1]),
    cell([P(run(u.title, { f: HEAD, size: 19 }), { after: 0 }), P(run(u.genre, { size: 16 }), { after: 0 })], cols[2]),
    cell(P(run(u.grammarScope, { size: 16 }), { after: 0, line: 250 }), cols[3]),
    cell(P(run(`${2 * u.id}–${2 * u.id + 1}`, { f: HEAD, size: 20 }), { after: 0, align: AlignmentType.CENTER }), cols[4])
  ] }));
  const b = { style: BorderStyle.SINGLE, size: 4, color: '000000' };
  k.push(table(cols, [head, ...rows], { borders: { top: b, bottom: b, left: noBorder, right: noBorder, insideHorizontal: b, insideVertical: noBorder } }));
  k.push(P(run(`Online: ${SITE}`, { en: true, size: 17 }), { before: 160, after: 0, align: AlignmentType.RIGHT }));
  return k;
}

/* ---------- 組合 ---------- */
async function build(teacher) {
  const body = [...contents()];
  for (let i = 0; i < U.length; i++) body.push(...await unitPages(U[i], i, teacher));
  const pageProps = { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: MY, bottom: MY, left: MX, right: MX, footer: 420 } } };
  const doc = new Document({
    creator: 'Qixian Hoops English', title: 'Qixian Hoops English',
    styles: { default: { document: { run: { font: font(ZH), size: 21 }, paragraph: { spacing: { after: 60 } } } } },
    sections: [
      { properties: pageProps, children: cover(teacher) },
      { properties: { ...pageProps, page: { ...pageProps.page, pageNumbers: { start: 1 } } },
        footers: { default: new Footer({ children: [P([run('QIXIAN HOOPS ENGLISH' + (teacher ? '  ·  TEACHER' : '') + '   ', { f: HEAD, size: 14 }),
          new TextRun({ children: [PageNumber.CURRENT], font: font(HEAD), size: 16 })], { align: AlignmentType.LEFT, after: 0 })] }) },
        children: body }
    ]
  });
  const file = OUT + `七賢英語閱讀教材_${teacher ? '教師版' : '學生版'}.docx`;
  fs.writeFileSync(file, await Packer.toBuffer(doc));
  console.log('wrote', file);
}
(async () => { await build(false); await build(true); })();
