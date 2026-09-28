// 課本單字比對：產生各種詞形（-s / -ed / -ing / 去 e / 字尾重複 / y→ied），片語則變化第一個字。
(function (root) {
  // 不應標示的同形字（Unit 5 課本的 can 是「罐頭」，不是助動詞）
  var SKIP = { 5: ['can'] };

  function alts(v) {
    var a = v.replace(/\(.*?\)/g, '').split('/').map(function (k) { return k.replace(/[?.!…]/g, '').trim(); }).filter(Boolean);
    if (a.length === 2 && a[0].indexOf(' ') < 0 && a[1].indexOf(' ') > 0) a[0] += ' ' + a[1].split(' ').slice(1).join(' ');
    return a;
  }
  function forms(w) {
    var f = [w, w + 's', w + 'es', w + 'd', w + 'ed', w + 'ing', w + 'er', w + 'est', w + 'ly', w + "'s"];
    if (/e$/.test(w)) f.push(w.slice(0, -1) + 'ing');
    if (/[^aeiou]y$/.test(w)) f.push(w.slice(0, -1) + 'ied', w.slice(0, -1) + 'ies', w.slice(0, -1) + 'ily');
    if (/[^aeiou][aeiou][bdgklmnprt]$/.test(w)) f.push(w + w.slice(-1) + 'ed', w + w.slice(-1) + 'ing', w + w.slice(-1) + 'er');
    return f;
  }
  function keys(list, unitId) {
    var out = {}, skip = SKIP[unitId] || [];
    list.forEach(function (v) {
      alts(v).forEach(function (k) {
        if (k.length < 2 || /^-/.test(k) || skip.indexOf(k.toLowerCase()) >= 0) return;
        var parts = k.split(/\s+/);
        forms(parts[0]).forEach(function (f) { out[[f].concat(parts.slice(1)).join(' ').toLowerCase()] = 1; });
      });
    });
    return Object.keys(out).sort(function (a, b) { return b.length - a.length; });
  }
  function vocabRegex(list, unitId) {
    var esc = keys(list, unitId).map(function (k) { return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+'); });
    return new RegExp("\\b(?:" + esc.join('|') + ")(?![A-Za-z])", 'gi');
  }
  root.VocabTools = { alts: alts, vocabRegex: vocabRegex };
  if (typeof module !== 'undefined') module.exports = root.VocabTools;
})(typeof window !== 'undefined' ? window : this);
