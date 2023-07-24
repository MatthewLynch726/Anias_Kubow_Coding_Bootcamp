
// const bob = document.querySelector('.face')
// var count = 0
// function moveBob(){
//     count += 1
//     bob.style.left = count + 'px'
//     console.log('hi')
//     console.log(count)
// }

// bob.addEventListener('click', moveBob)

// const string = "say cheese, "
// const string2  = "Ania"

// console.log(string.concat(string2))

// const housemates2018 = [
//     {
//         name: 'Ahmed',
//         age: 24
//     },

//     {
//         name: 'Ellen',
//         age: 35
//     },

//     {
//         name: 'Woody',
//         age: 30
//     },

// ]


// const housemates2021 = housemates2018.map(mate => mate.age + 3)

// console.log(housemates2021)

// .reduce()

// add all the number together

const scores = [34,56,24,31]

const newscores = scores.reduce((totalScore, currentScore) => totalScore + currentScore)

console.log(newscores)
