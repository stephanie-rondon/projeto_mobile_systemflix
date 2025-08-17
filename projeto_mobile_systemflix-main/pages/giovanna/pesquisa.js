document.addEventListener("DOMContentLoaded", () => {
    const filmes = [
        { nome: "Coraline", arquivo: "" },
        { nome: "Frozen", arquivo: "../../lyly/frozen/index2.html" },
        { nome: "Wall-E", arquivo: "../../lyly/walle/index2.html" },
        { nome: "Coringa", arquivo: "../../lyly/coringa/index2.html" },
        { nome: "Premonição", arquivo: "../../lyly/premonicao/index2.html" },
        { nome: "Divertidamente 2", arquivo: "../../lyly/divertidamente/index2.html" },
        { nome: "Invocação do Mal", arquivo: "../../lyly/invocacao/index2.html" },
        { nome: "A Substância", arquivo: "../../lyly/subs/index2.html" }
    ];

    const inputSearch = document.getElementById("search");
    const content = document.getElementById("content");

    function mostrarFilmes(filmesFiltrados) {
        content.innerHTML = "";

        if (filmesFiltrados.length === 0) {
            content.innerHTML = "<p>Nenhum filme encontrado.</p>";
            return;
        }

        const ul = document.createElement("ul");
        filmesFiltrados.forEach(filme => {
            const li = document.createElement("li");

            const link = document.createElement("a");
            link.textContent = filme.nome;
            link.href = `filmes/${filme.arquivo}`;
            link.target = "_blank"; // abre em nova aba (opcional)
            link.style.textDecoration = "none";
            link.style.color = "#333";

            li.appendChild(link);
            ul.appendChild(li);
        });

        content.appendChild(ul);
    }

    inputSearch.addEventListener("input", () => {
        const termo = inputSearch.value.toLowerCase();
        const filmesFiltrados = filmes.filter(filme =>
            filme.nome.toLowerCase().includes(termo)
        );
        mostrarFilmes(filmesFiltrados);
    });
});

