const box = document.querySelector('.hexagon')

let count = 10 
function alertMe(){
    box.style.marginTop = count + 'px';
    count += 10
    if(count >= 200){
        console.log("You have gone far enough!")
        box.removeEventListener('click', alertMe)
    }
}

box.addEventListener('click', alertMe)
