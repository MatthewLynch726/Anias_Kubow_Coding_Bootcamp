//Array work!

//convert farenheit to celcius using map

console.log("This is getting used!")

function getCelcius(fTemp){
    const celcius = fTemp.map(temp => (temp -32) * (5/9))
    return celcius
}

const tempArray = [23,140,212]

console.log(getCelcius(tempArray))