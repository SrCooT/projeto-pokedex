const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")
const body = document.querySelector("body");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  //toggle ele faz o mesmo de add e remover 
  body.classList.toggle("modo-escuro")

if(modoEscuroEstaAtivo) {
 
    // body.classList.remove("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("src","./imagem/sun.png");
} else {
    // body.classList.add("modo-escuro");
    imagemBotaoTrocaDeTema.setAttribute("src","./imagem/moon.png");
    
}

});
