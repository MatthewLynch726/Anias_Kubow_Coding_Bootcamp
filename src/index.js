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

function checkforFalesy(tempArray){
    return tempArray.some(value => !value)
}

console.log(checkforFalesy([11, NaN, 'Angles']))