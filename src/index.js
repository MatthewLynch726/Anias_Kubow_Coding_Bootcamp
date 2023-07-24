
const bob = document.querySelector('.face')
var count = 0
function moveBob(){
    count += 1
    bob.style.left = count + 'px'
    console.log('hi')
    console.log(count)
}

bob.addEventListener('click', moveBob)

