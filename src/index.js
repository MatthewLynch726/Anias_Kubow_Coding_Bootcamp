
const bob = document.querySelector('.face')

function moveBob(){
    bob.style.left = '100px'
    console.log('hi')
}

bob.addEventListener('click', moveBob)