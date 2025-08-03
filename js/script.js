// script.js

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');

  // Temayı yükle
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️ Tema';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleBtn.textContent = '🌙 Tema';
  }
  const themeToggleBtn = document.getElementById('theme-toggle');

function toggleTheme() {
  if (document.body.classList.toggle('dark-theme')) {
    themeToggleBtn.textContent = '☀️ Tema';
  } else {
    themeToggleBtn.textContent = '🌙 Tema';
  }
}

themeToggleBtn.addEventListener('click', toggleTheme);

  // Butona tıklanınca tema değiştir
  toggleBtn.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleBtn.textContent = newTheme === 'dark' ? '☀️ Tema' : '🌙 Tema';
  });
});
