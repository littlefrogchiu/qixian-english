// 共用：生涯晉級、經驗值、發音、QR、暱稱
(function () {
  // 籃球員生涯：從小到老
  var CAREER = [
    { xp: 0,     e: '🍼', en: 'Baby Baller',      zh: '玩具球寶寶' },
    { xp: 100,   e: '🏀', en: 'Rookie Kid',       zh: '國小校隊新人' },
    { xp: 300,   e: '🏫', en: 'Qixian Starter',   zh: '七賢國中先發' },
    { xp: 700,   e: '🔥', en: 'HBL Star',         zh: '高中聯賽明星' },
    { xp: 1300,  e: '🎓', en: 'UBA Champ',        zh: '大專聯賽冠軍' },
    { xp: 2200,  e: '📝', en: 'Draft Pick',       zh: '選秀新秀' },
    { xp: 3500,  e: '💪', en: 'Pro Starter',      zh: '職業先發' },
    { xp: 5200,  e: '⭐', en: 'All-Star',         zh: '全明星' },
    { xp: 7500,  e: '🏆', en: 'MVP',              zh: '年度 MVP' },
    { xp: 10500, e: '💍', en: 'Champion',         zh: '總冠軍' },
    { xp: 14500, e: '🏛️', en: 'Hall of Famer',    zh: '名人堂' },
    { xp: 20000, e: '👴', en: 'Legend Coach',     zh: '退休傳奇教練' }
  ];
  function get(k) { try { return localStorage.getItem(k) || ''; } catch (e) { return ''; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function xp() { return parseInt(get('qx_xp'), 10) || 0; }
  function stage(x) {
    if (x == null) x = xp();
    var i = 0;
    while (i + 1 < CAREER.length && x >= CAREER[i + 1].xp) i++;
    var cur = CAREER[i], next = CAREER[i + 1];
    return { i: i, cur: cur, next: next, xp: x, pct: next ? Math.round((x - cur.xp) / (next.xp - cur.xp) * 100) : 100 };
  }
  function addXP(n) {
    var before = stage(), after = stage(xp() + Math.max(0, n));
    set('qx_xp', String(after.xp));
    return { gained: n, before: before, after: after, up: after.i > before.i ? after.cur : null };
  }

  // 發音（瀏覽器內建語音）
  var voice = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    var vs = speechSynthesis.getVoices().filter(function (v) { return /^en[-_]US/i.test(v.lang); });
    voice = vs.filter(function (v) { return /Samantha|Google US|Aria|Jenny|Zira/i.test(v.name); })[0] || vs[0] || null;
  }
  if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, rate) {
    if (!('speechSynthesis' in window) || !text) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = rate || 0.9;
    if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function qrSvg(text, cell) { var q = qrcode(0, 'M'); q.addData(text); q.make(); return q.createSvgTag({ cellSize: cell || 4, margin: 2, scalable: true }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  function careerCard() {
    var s = stage();
    return '<div class="career"><div class="emo">' + s.cur.e + '</div><div style="flex:1">' +
      '<div class="lv">' + s.cur.en + '</div><div class="sub">' + s.cur.zh + '・' + s.xp + ' XP' +
      (s.next ? '　下一站 ' + s.next.e + ' ' + s.next.en + '（' + s.next.xp + ' XP）' : '　生涯頂點！') + '</div>' +
      '<div class="xpbar"><i style="width:' + s.pct + '%"></i></div></div></div>' +
      '<div class="ladder">' + CAREER.map(function (c, i) {
        var st = i < s.i ? 'got' : i === s.i ? 'got now' : 'lock';
        return '<div class="' + st + '" title="' + c.en + '（' + c.xp + ' XP）">' +
          (i === s.i ? '<span class="you">YOU</span>' : '') +
          '<span class="n">' + (i + 1) + '</span><span class="e">' + c.e + '</span>' +
          '<b>' + c.zh + '</b><small>' + (i < s.i ? '✓ 已達成' : i === s.i ? '目前階段' : c.xp.toLocaleString() + ' XP') + '</small></div>';
      }).join('') + '</div>';
  }

  window.Hoops = { CAREER: CAREER, xp: xp, stage: stage, addXP: addXP, speak: speak, esc: esc, qrSvg: qrSvg, shuffle: shuffle,
    careerCard: careerCard, get: get, set: set };
})();
