// Página de Stephanie

// Função para verificar o login
function verificarLogin(email, senha) {
    fetch('http://localhost:3000/cadastro')
      .then(response => response.json())
      .then(dados => {
        // Verifica se algum usuário possui o mesmo e-mail e senha
        const usuario = dados.find(user => user.email === email && user.senha === senha);
  
        if (usuario) {
          console.log('Login bem-sucedido!');
          alert('Login bem-sucedido!');
  
          // Se o usuário selecionou "Lembrar-me", salva o e-mail no localStorage
          if (document.getElementById('lembrar-me').checked) {
            localStorage.setItem('usuarioEmail', email);
          }
  
          // Redireciona para a página principal ou painel do usuário
          window.location.href = '../page2/index2.html'; // Altere para a página que você deseja
        } else {
          console.error('E-mail ou senha inválidos');
          alert('E-mail ou senha inválidos. Tente novamente.');
        }
      })
      .catch(error => {
        console.error('Erro ao verificar login:', error);
        alert('Erro ao tentar fazer login. Tente novamente.');
      });
  }
  
  // Função para verificar se o usuário foi lembrado
  function verificarLembrete() {
    const usuarioEmail = localStorage.getItem('usuarioEmail');
    if (usuarioEmail) {
      document.getElementById('e-mail').value = usuarioEmail;
      document.getElementById('lembrar-me').checked = true; // Marca o checkbox
    }
  }
  
  // Captura o evento de submit do formulário de login
  document.getElementById('btnEntrar').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o envio tradicional do formulário
  
    // Pega os valores dos campos do formulário
    const email = document.getElementById('e-mail').value;
    const senha = document.getElementById('senha').value;
  
    // Chama a função para verificar o login
    verificarLogin(email, senha);
  });
  
  // Verifica se o usuário já foi lembrado ao carregar a página
  verificarLembrete();
  