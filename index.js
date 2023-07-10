const herodiv = document.querySelector('.hero')
const sillyImage = herodiv.querySelector('img')

console.log("thisfunction is working!")

function changeColor(){
    console.log("thisfunction is working!")
    sillyImage.backgroundColor = 'blue'

}

sillyImage.addEventListener('click', changeColor)