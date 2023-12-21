const textoSecreto = `"Sistema Operacional que estais na memória,
Compilado seja o vosso programa,
Venha à tela os vossos comandos,
Seja executada a nossa rotina,
Assim na memória, como na impressora.
Acerto nosso de cada dia, rodai hoje
Informai os nossos erros,
Assim como nós informamos o que está corrigido,
Não nos deixai entrar em looping,
Mas livrai-nos do Dump,
A main().`;

function particionarTextoComMatrizDePalavras(texto) {
    let matriz = [];
    let arrStrLinhas = texto.split('\n');

    for (let strLinha of arrStrLinhas) {
        let arrStrPalavras = strLinha.split(' ');
        matriz.push(arrStrPalavras);
    }

    return matriz;
}

function toggleClasses(elemNodeFilho, classToAdd, classToRemove) {
    elemNodeFilho.classList.toggle(classToAdd);
    elemNodeFilho.classList.toggle(classToRemove);
}

function quandoMouseEntrarDiv(event) {
    let elemNodeFilhos = this.children;

    for (let elemNodeFilho of elemNodeFilhos) {
        if (elemNodeFilho.classList.contains('espaco')) continue;
        toggleClasses(elemNodeFilho, 'palavra-omitida', 'palavra-revelada');
    }
}

function quandoMouseSaiDiv(event) {
    let elemNodeFilhos = this.children;

    for (let elemNodeFilho of elemNodeFilhos) {
        if (elemNodeFilho.classList.contains('espaco')) continue;
        toggleClasses(elemNodeFilho, 'palavra-revelada', 'palavra-omitida');
    }
}

function preencherDivPrincipal(matStrLinhas, divConteudo) {
    for (const arrStrLinha of matStrLinhas) {
        const elemNodeDiv = document.createElement('div');
        elemNodeDiv.classList.add('segredo');

        elemNodeDiv.onmouseenter = quandoMouseEntrarDiv;
        elemNodeDiv.onmouseleave = quandoMouseSaiDiv;

        for (const strPalavra of arrStrLinha) {
            const elemNodeSpanPalavra = document.createElement('span');
            elemNodeSpanPalavra.classList.add('palavra-omitida');
            elemNodeSpanPalavra.textContent = strPalavra;

            const elemNodeSpanEspaco = document.createElement('span');
            elemNodeSpanEspaco.classList.add('espaco');
            elemNodeSpanEspaco.textContent = " ";

            elemNodeDiv.appendChild(elemNodeSpanPalavra);
            elemNodeDiv.appendChild(elemNodeSpanEspaco);
        }

        divConteudo.appendChild(elemNodeDiv);
    }
}

function setup() {
    console.log("Executando a aplicação web");
    let divPrincipal = document.getElementById('main-content');
    let matrizDePalavras = particionarTextoComMatrizDePalavras(textoSecreto);
    preencherDivPrincipal(matrizDePalavras, divPrincipal);
}

