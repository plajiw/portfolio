document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.querySelector('.theme-switch');
  
  // Verifica se há um tema salvo no localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeSwitch.classList.remove('dark');
  } else {
      themeSwitch.classList.add('dark');
  }

  // Função para alternar o tema
  function toggleTheme() {
      if (themeSwitch.classList.contains('dark')) {
          // Mudar para tema claro
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          themeSwitch.classList.remove('dark');
      } else {
          // Mudar para tema escuro
          document.documentElement.setAttribute('data-theme', '');
          localStorage.setItem('theme', 'dark');
          themeSwitch.classList.add('dark');
      }
  }

  // Adiciona o evento de clique ao botão
  themeSwitch.addEventListener('click', toggleTheme);
});