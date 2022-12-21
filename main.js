//Sons
function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio).play(); 

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }

    else{
        console.log('Elemento não encontrado')
    }
}

const listaDeTeclas =  document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]

    const instrumento = tecla.classList[1];
    console.log(instrumento);

    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    //console.log(contador);

    tecla.onkeydown = function(evento) {
        
        //console.log(evento.code == 'Space')

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa')
        }

    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
}