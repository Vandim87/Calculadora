function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        inicia(){
            alert('oi, iniciar');
        },
        cliqueBotoes(){
            
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();