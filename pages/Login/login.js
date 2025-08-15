// Página de Stephanie
document.getElementById('formLogin').addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = document.getElementById('e-mail').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (!email || !senha) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  try {
    const resposta = await fetch(`http://localhost:3000/cadastro?email=${email}`);
    const dados = await resposta.json();

    if (dados.length === 0) {
      alert('E-mail não cadastrado.');
      return;
    }

    const usuario = dados[0];

    if (usuario.senha !== senha) {
      alert('Senha incorreta.');
      return;
    }

    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

  } catch (erro) {
    console.error('Erro ao fazer login:', erro);
    alert('Erro de conexão com o servidor.');
  }
})
