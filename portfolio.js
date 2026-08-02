const pagepoint = document.querySelectorAll('.sector');
const pages = document.querySelectorAll('.control');
const general = document.querySelector('.codespace');
const themeBtn = document.getElementById('theme-btn');
const themeIcon = themeBtn.querySelector('i');

// Page navigation
function pagechange() {
  general.addEventListener('click', (e) => {
    const identity = e.target.dataset.id;
    if (identity) {
      pages.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      pagepoint.forEach((section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(identity);
      if (element) {
        element.classList.add('active');
      }
    }
  });
}

pagechange();

// Theme toggle (dark = default)
function initTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');

  if (isLight) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('portfolio-theme', 'light');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('portfolio-theme', 'dark');
  }
});

initTheme();
