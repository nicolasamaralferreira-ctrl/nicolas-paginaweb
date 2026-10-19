const botoes = document.querySelectorAll("article button");

botoes.forEach(function (botao) {
    let curtiu = false; 

    botao.addEventListener("click", function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        let contadorAtual = parseInt(texto.textContent);

        if (curtiu === false) {
            texto.textContent = contadorAtual + 1;
            curtiu = true;
        } else {
            texto.textContent = contadorAtual - 1;
            curtiu = false;
        }
    });
});

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
    const corpoPagina = document.body;
    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}