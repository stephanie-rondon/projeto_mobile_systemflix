// Página de Stephanie

// Função para adicionar um novo cadastro
function adicionarCadastro(novoCadastro) {
    fetch('http://localhost:3000/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoCadastro),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Cadastro adicionado:', data);
      // Após o cadastro, você pode redirecionar o usuário para uma outra página ou exibir uma mensagem de sucesso
      alert('Cadastro realizado com sucesso!');
    })
    .catch(error => {
      console.error('Erro ao adicionar cadastro:', error);
      alert('Erro ao realizar o cadastro.');
    });
  }
  
  // Função para validar se as senhas são iguais
  function validarSenhas(senha, confirmarSenha) {
    return senha === confirmarSenha;
  }
  
  // Captura o evento de submit do formulário
  document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio tradicional do formulário
    
    // Pega os valores dos campos do formulário
    const email = document.getElementById('e-mail').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
  
    // Valida as senhas
    if (!validarSenhas(senha, confirmarSenha)) {
      alert('As senhas não coincidem. Tente novamente.');
      return;
    }
  
    // Cria um objeto com os dados do novo cadastro
    const novoCadastro = {
      email: email,
      senha: senha,
    };
  
    // Chama a função para adicionar o cadastro no JSON Server
    adicionarCadastro(novoCadastro);
  });
  