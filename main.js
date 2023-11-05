const form = document.getElementById('form-validation');

let formValida = false;

function validateNumber (valorA, valorB){
    return valorA < valorB;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let valorA = parseFloat(document.getElementById('campo-a').value);
    let valorB = parseFloat(document.getElementById('campo-b').value);

    const messagesucesso = '<b>formulário enviado - O valor do campo B é maior que do campo A!</b>';
    const containermessagesucesso = document.querySelector('.success-ms');
    
    formValida = validateNumber(valorA, valorB);

    if (formValida){
        document.querySelector('.error-ms').style.display = 'none';
        containermessagesucesso.innerHTML = messagesucesso;
        containermessagesucesso.style.display = 'block';
        document.querySelector('.error-ms').style.display = 'none';

        valorA.value = '';
        valorB.value = '';
    } else {
        document.querySelector('.error-ms').style.display = 'block';
        containermessagesucesso.style.display = 'none';
    }    
})