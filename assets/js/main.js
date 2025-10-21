
(function(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if ((here === 'index.html' && href === './') || href.endsWith(here)) {
      a.classList.add('active');
    }
  });
})();

function simpleFilter(inputId, itemsSelector) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    document.querySelectorAll(itemsSelector).forEach(el => {
      const text = el.textContent.toLowerCase();
      el.style.display = text.includes(q) ? '' : 'none';
    });
  });
}
window.simpleFilter = simpleFilter;

(function(){
  const key = 'site-theme';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem(key);
  const current = saved || (prefersDark ? 'dark' : 'dark');
  document.documentElement.dataset.theme = current;
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const newTheme = (localStorage.getItem(key) === 'light') ? 'dark' : 'light';
      localStorage.setItem(key, newTheme);
      document.documentElement.dataset.theme = newTheme;
    });
  }
})();
