/*
 quando clicar na seta pra avançar temos que   esconder todas as imagens e mostrar a próxima imagem

 a imagem atual começa em 0 porque é a 1a imagem de todas 
 assim que for clicando no avançar, eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a 2a imagem

 esconder todas as imagens 
 pegar todas as imagens usando o DOM e remover a classe mostrar

 mostrar a próxima imagem
 pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela   

*/

const imagensPainel = document.querySelectorAll ('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
   imagensPainel.forEach(imagem => {
      imagem.classList.remove('mostrar')
   });
}

function mostrarImagem() {
   imagensPainel[imagemAtual].classList.add('mostrar');
}

function mostrarOuEsconderSetas() {
   const naoEhAPrimeiraImagem = imagemAtual !== 0;
   if (naoEhAPrimeiraImagem) {
      setaVoltar.classList.remove("opacidade");
   } else {
      setaVoltar.classList.add("opacidade");
      
   }

   const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagensPainel.length -1;
   if (chegouNaUltimaImagem) {
       setaAvancar.classList.add("opacidade");
   } else {
         setaAvancar.classList.remove("opacidade")
   }
}

// quando clicar na seta pra avançar temos que   esconder todas as imagens e mostrar a próxima imagem

setaAvancar.addEventListener('click', function() { 

// testa se o contador da imagemAtual é igual ao total de imagens
const totalDeImagens = imagensPainel.length - 1;
if (imagemAtual === imagensPainel.length -1) {
     return
}   

// a imagem atual começa em 0 porque é a 1a imagem de todas 
//  assim que for clicando no avançar, eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a 2a imagem

imagemAtual++;

esconderImagens();
mostrarImagem();
mostrarOuEsconderSetas();
});

// quando clicar na seta pra avançar temos que   esconder todas as imagens e mostrar a imagem anterior

setaVoltar.addEventListener('click', function () {

   if (imagemAtual === 0) {
         return      
   }

   imagemAtual--;

   esconderImagens();
   mostrarImagem();
   mostrarOuEsconderSetas();
})
