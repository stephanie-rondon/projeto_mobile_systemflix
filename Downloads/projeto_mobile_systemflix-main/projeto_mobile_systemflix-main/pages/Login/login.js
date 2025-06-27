//Código criado por Chat GPT

    const botaoEntrar = document.getElementById("btnEntrar");
    botaoEntrar.addEventListener("click", function (event) {
        event.preventDefault();
        const emailDigitado = document.getElementById("e-mail").value;
        const senhaDigitada = document.getElementById("senha").value;
        const dadosUsuario = JSON.parse(localStorage.getItem("usuario"));
        if (
            dadosUsuario &&
            emailDigitado === dadosUsuario.email &&
            senhaDigitada === dadosUsuario.senha
        ) {
            window.location.href= "../page2/index2.html";
        }else{
            alert("E-mail ou senha incorretos.")
        }
    });

