let input = document.getElementById("input-element")
let errorMessage = document.getElementById('error-tag')
let sucessCard = document.getElementById('sucess-card-tag')
let buttonSubscribe = document.getElementById('button-Subscribe-element')
let buttonDismiss = document.getElementById('button-dismiss-element')
let cardMain = document.getElementById('main-card-element')
input.addEventListener('change', () => {
    if(input.value.trim() === ''){
        input.classList.remove('email-input')
        input.classList.add('email-input-vazio')
        errorMessage.style.position = 'static';

    }else{
        errorMessage.style.position = 'absolute';
    }
})


function modalSucess(){
    cardMain.style.display = 'none'
    sucessCard.style.display = 'block'
}

function  dimissMessage(){
    console.log("button works!")
}
