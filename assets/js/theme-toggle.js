(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var DARK = 'dark';
  var LIGHT = 'light';

  function getSystemPref() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? DARK : LIGHT;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute('aria-label', theme === DARK ? 'Switch to light mode' : 'Switch to dark mode');
      btn.textContent = theme === DARK ? '☀️' : '🌙';
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || getSystemPref();
    var next = current === DARK ? LIGHT : DARK;
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // On load: apply saved preference or fall back to system
  var saved = localStorage.getItem(STORAGE_KEY);
  applyTheme(saved || getSystemPref());

  // Wire up button once DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      var current = document.documentElement.getAttribute('data-theme') || getSystemPref();
      btn.textContent = current === DARK ? '☀️' : '🌙';
      btn.setAttribute('aria-label', current === DARK ? 'Switch to light mode' : 'Switch to dark mode');
      btn.addEventListener('click', toggleTheme);
    }

    // React to OS-level changes in real time (when no manual override is saved)
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? DARK : LIGHT);
        }
      });
    }
  });
})();
