
/*Esse código foi criado com o Chat GPT*/
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('e-mail').value;
      const senha = document.getElementById('senha').value;
      const confirmarSenha = document.getElementById('confirmar-senha').value;
      if (!email || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos!');
        return;
      }
      if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
      }
      const usuario = {
        email: email,
        senha: senha,
      };
      localStorage.setItem('usuario', JSON.stringify(usuario));
      alert('Cadastro realizado com sucesso!');
      window.location.href = 'login.html';
    });
  });
  