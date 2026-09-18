/* app.js —— 渲染 + 主题切换。改站点请编辑 sites.js，本文件无需改动。 */
(function () {
  'use strict';

  /* ---------- 工具 ---------- */
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  /* 名称 -> 稳定色相，保证同一站点每次打开颜色一致 */
  var hueOf = function (name) {
    var h = 5381;
    for (var i = 0; i < name.length; i++) h = ((h << 5) + h + name.charCodeAt(i)) | 0;
    return Math.abs(h) % 360;
  };

  var monogram = function (name) {
    var ch = String(name || '?').trim().charAt(0);
    return /[a-z]/i.test(ch) ? ch.toUpperCase() : ch;
  };

  /* 图标：留空 -> 首字色块；http(s) -> 图片；否则按 emoji/文字符号渲染 */
  var iconHTML = function (item) {
    var icon = (item.icon || '').trim();

    if (/^https?:\/\//i.test(icon)) {
      return '<span class="card-icon"><img src="' + esc(icon) +
             '" alt="" loading="lazy" decoding="async"></span>';
    }
    if (icon) return '<span class="card-icon">' + esc(icon) + '</span>';

    var h = hueOf(item.name || '');
    return '<span class="card-icon" style="--icon-bg:hsl(' + h + ' 26% 94%);--icon-fg:hsl(' + h +
           ' 30% 38%)">' + esc(monogram(item.name)) + '</span>';
  };

  /* ---------- 渲染 ---------- */
  var render = function () {
    var app = document.getElementById('app');
    var html = '';

    (typeof GROUPS !== 'undefined' ? GROUPS : []).forEach(function (group) {
      var items = group.items || [];
      if (!items.length) return;

      html += '<section class="group">' +
              '<h2 class="group-title">' + esc(group.name) + '</h2>' +
              '<div class="grid">';

      items.forEach(function (item) {
        html += '<a class="card" href="' + esc(item.url) + '" target="_blank" rel="noopener noreferrer">' +
                  iconHTML(item) +
                  '<span class="card-body">' +
                    '<span class="card-name">' + esc(item.name) + '</span>' +
                    (item.desc ? '<span class="card-desc">' + esc(item.desc) + '</span>' : '') +
                  '</span>' +
                '</a>';
      });

      html += '</div></section>';
    });

    app.innerHTML = html;
  };

  /* ---------- 元信息 ---------- */
  var applyMeta = function () {
    var title = (typeof SITE_TITLE !== 'undefined' && SITE_TITLE) || '导航';
    var desc = (typeof SITE_DESC !== 'undefined' && SITE_DESC) || '';
    document.title = title;
    document.getElementById('site-title').textContent = title;
    document.getElementById('site-desc').textContent = desc;

    var count = 0;
    (typeof GROUPS !== 'undefined' ? GROUPS : []).forEach(function (g) { count += (g.items || []).length; });
    document.getElementById('site-footer').textContent =
      '共 ' + (typeof GROUPS !== 'undefined' ? GROUPS.length : 0) + ' 个分组 · ' + count + ' 个站点';
  };

  /* ---------- 主题切换 ---------- */
  var root = document.documentElement;
  var syncThemeColor = function () {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', root.getAttribute('data-theme') === 'dark' ? '#16181a' : '#f7f8fa');
  };

  document.getElementById('theme-toggle').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('nav-theme', next); } catch (e) {}
    syncThemeColor();
  });

  syncThemeColor();
  render();
  applyMeta();
})();
