const buttonEl = document.querySelector('button')
console.log(buttonEl);

const imageEl = document.querySelector('img')
console.log(imageEl);



buttonEl.addEventListener('click', function () {
    imageEl.src = './assets/img/yellow_lamp.png'
})



