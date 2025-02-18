const buttonEl = document.querySelector('button')
console.log(buttonEl);

const imageEl = document.querySelector('img')
console.log(imageEl);



/* buttonEl.addEventListener('click', function () {
    imageEl.src = './assets/img/yellow_lamp.png'
}) */

buttonEl.addEventListener('click', function () {
    
    if (buttonEl.innerText.includes('Accendi')) {
        imageEl.src = './assets/img/yellow_lamp.png'
        buttonEl.innerText = 'Spegni'
    } else {
        imageEl.src = './assets/img/white_lamp.png'
        buttonEl.innerText = 'Accendi'
    }
    
})


