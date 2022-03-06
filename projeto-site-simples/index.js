var thanks = window.document.getElementById('h1dif')
var cor = window.document.getElementById('votou')
var caixa = window.document.getElementById('votos')
var box = Number(caixa.value)
/*Ou usamos -> cor.addEventListener('click', corsim)*/

function corsim(){
    if(box >= 1 && box <= 4){
    cor.style.background = 'aqua'
    thanks.innerHTML = 'OBRIGADO POR VOTAR!'
    thanks.style.color  = 'darkblue'
    }
    else{
    thanks.innerHTML = 'Escolha um número válido'
    thanks.style.color  = 'red'
    }
}