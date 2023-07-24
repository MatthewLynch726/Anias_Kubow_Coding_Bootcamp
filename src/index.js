//Array work!

//convert farenheit to celcius using map

// function getCelcius(fTemp){
//     const celcius = fTemp.map(temp => (temp -32) * (5/9))
//     return celcius
// }

// const tempArray = [23,140,212]

// console.log(getCelcius(tempArray))

//.........................

//using 'some' write a function that cheks an array for a 'falsey' value
//ex. checkForFalsey([11, NaN, [], 'Angels']) => true

// function checkforFalesy(tempArray){
//     return tempArray.some(value => !value)
// }

// console.log(checkforFalesy([11, NaN, 'Angles']))

//...............................

// USING THE REDUCE FUNCTION
//using reduce write a function that will return the total number of characters in an array of strings
// const tempArray = ['Rabbit', 'Football', 'Cracking']
// function getTotal(tempArray){
//     const number = tempArray.reduce((totalCharacters, word) => {return word.length + totalCharacters} , 0)
//     return number
// }

// console.log(getTotal(tempArray))

//.....................................

//USING EVERY FUNCTION
// using 'every' write a function that checks whether every number in an array is a square number

// const tempArray = [9,16,81]

// function checkSquares(tempArray){
//    return tempArray.every((number) => (Math.sqrt(number) % 1 === 0)
//     )
// }

// console.log(checkSquares(tempArray))

//.................................

//Using an array method, write a function that returns the string elements of an array that have a given length or larger

// const wordsArray = ['Florida', 'dog','phone']
// const number = 5

// function getWords(tempArray, number){
//     return tempArray.filter(word => word.length >= number)
// }


// console.log(getWords(wordsArray, number))

//.............................

//Using an array method, write a function that converts an array of cm values as strings, into an array of numbers

tempArray = ['23cm', '5.6cm', '1000cm']

function getValues(tempArray){
    return tempArray.map(value => parseFloat(value))
}

console.log(getValues(tempArray))