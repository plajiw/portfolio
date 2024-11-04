const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    document.documentElement.style.setProperty('--bg-color', 'var(--light-bg-color)');
    document.documentElement.style.setProperty('--section-bg', 'var(--light-section-bg)');
    document.documentElement.style.setProperty('--text-color', 'var(--light-text-color)');
    document.documentElement.style.setProperty('--text-secondary', 'var(--light-text-secondary)');
    document.documentElement.style.setProperty('--border-color', 'var(--light-border-color)');
  } else {
    document.documentElement.style.setProperty('--bg-color', '#0A0A0A');
    document.documentElement.style.setProperty('--section-bg', '#151515');
    document.documentElement.style.setProperty('--text-color', '#E6E6E6');
    document.documentElement.style.setProperty('--text-secondary', '#A0A0A0');
    document.documentElement.style.setProperty('--border-color', '#252525');
  }
});
