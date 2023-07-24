const body = document.querySelector('body')

function speak(){
    console.log("Greetings!")
}

const otherFunction = function(){
    console.log('example text')
}

const otherFunction2 = () => {
    console.log('This is another example')
}

body.addEventListener('click', speak)