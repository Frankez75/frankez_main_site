const pagepoint = document.querySelectorAll('.sector');
const pages = document.querySelectorAll('.control');
const general = document.querySelector('.codespace');
const themeBtn = document.getElementById('theme-btn');
const themeIcon = themeBtn.querySelector('i');

// Page navigation
function pagechange() {
  general.addEventListener('click', (e) => {
    // Ignore clicks that originated from the theme button
    if (e.target.closest('#theme-btn')) return;

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
function setTheme(isLight) {
  if (isLight) {
    document.body.classList.add('light-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    try { localStorage.setItem('portfolio-theme', 'light'); } catch (err) {}
  } else {
    document.body.classList.remove('light-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    try { localStorage.setItem('portfolio-theme', 'dark'); } catch (err) {}
  }
}

function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('portfolio-theme'); } catch (err) {}
  setTheme(saved === 'light');
}

let lastToggle = 0;
function handleThemeToggle(e) {
  e.preventDefault();
  e.stopPropagation();
  // Debounce to prevent double-fire from touch + click on mobile
  const now = Date.now();
  if (now - lastToggle < 400) return;
  lastToggle = now;

  const isCurrentlyLight = document.body.classList.contains('light-mode');
  setTheme(!isCurrentlyLight);
}

themeBtn.addEventListener('click', handleThemeToggle);
themeBtn.addEventListener('touchend', handleThemeToggle, { passive: false });

initTheme();
