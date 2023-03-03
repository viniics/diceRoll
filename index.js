
var isActiveOne = true;
var isActiveTwo = true;

var valorDado1;
var valorDado2;
defaultTheme = "light";


//Funcao que eh executada ao apertar no botao de girar o dado
function roll(dado) {
    var index = (Math.floor((Math.random()) * 6)) + 1;
    var dice = getImage(index);
    document.querySelector(dado).setAttribute("src", "resources/" + getImage(index))
    hideButton(dado);
    if (dado == ".dice-one") {
        valorDado1 = index;
    }
    else {
        valorDado2 = index;
    }
    if (isActiveOne == false && isActiveTwo == false) {
        console.log("entrou aq")
        mostrarGanhador(valorDado1, valorDado2);

    }
}

//Funcao para pegar a imagem correta do dado
function getImage(index) {
    switch (index) {
        case 1:
            return "oneDot.jpg"
            break;
        case 2:
            return "twoDot.jpg";
            break;
        case 3:
            return "threeDot.jpg"
            break;
        case 4:
            return "fourDot.jpg";
            break;
        case 5:
            return "fiveDot.jpg"
            break;
        case 6:
            return "sixDot.jpg";
            break;
    }
}

//Funcao para saber qual botao foi apertado. Será usada em outras funcoes
function getButton(btn) {
    switch (btn) {
        case ".dice-one":
            return ".btnOne"
            break;
        case ".dice-two":
            return ".btnTwo";
    }
}

//Funcao para esconder o botao apertado
function hideButton(dado) {
    var dado = getButton(dado)
    document.querySelector(dado).style.visibility = "hidden";
    if (dado == ".btnOne") {
        isActiveOne = false;
    }
    else {
        isActiveTwo = false;
    }
}

//Calcula o ganhador da função
function mostrarGanhador(dado1, dado2) {

    if (dado1 > dado2) {
        document.querySelector(".resultado").innerHTML = "Jogador 1 venceu";

    }
    else if (dado1 == dado2) {
        document.querySelector(".resultado").innerHTML = "Empate :(";
    }
    else {
        document.querySelector(".resultado").innerHTML = "Jogador 2 venceu";
    }
    document.querySelector(".resultado").style.visibility = "visible";
    document.querySelector(".vencedor").style.visibility = "visible";
}

//Funcao incompleta para mudar o tema, nao mantem o tema alterado apos clicar em jogar novamente.
function changeTheme() {
    if (defaultTheme === "light") {
        document.querySelector("#css-sheet").setAttribute("href", "css/darkMode.css");
        document.querySelector(".changeTheme").innerHTML = "<i class='bi bi-brightness-high-fill'></i>";
        defaultTheme = "dark";
    }
    else {
        document.querySelector("#css-sheet").setAttribute("href", "css/style.css");
        document.querySelector(".changeTheme").innerHTML = "<i class='bi bi-moon-fill'></i>";
        defaultTheme = "light";
    }
}


//ATT 1.1
/*
Adicionada função de resetar, que apenas esconde os */

function reset(){
    document.querySelector(".btnOne").style.visibility = "visible";
    isActiveOne=true;
    document.querySelector(".btnTwo").style.visibility = "visible";
    isActiveTwo=true;
    document.querySelector(".vencedor").style.visibility = "hidden";
    document.querySelector(".resultado").style.visibility = "hidden";
}