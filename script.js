const botoes = document.querySelectorAll("button");

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