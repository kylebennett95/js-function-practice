//MATH FUNCTIONS
const sum = (n1, n2) => {
    return n1 + n2
}

const multi = (n1) => {
    return n1 * 2
}

const answer = multi(13)
//console.log(answer)

const result = sum(31, 26)
//console.log(result)

const finalAnswer = (n1, n2) => {
    const Sum = sum(n1, n2)
    return multi(Sum)
}

const test = finalAnswer(4, 14)
//console.log(test)

//DATA FLOW
const createWoodBlock = () => {
    // Return an object with 4 properties.
    return {
        type: 'wood block',
        length: 10,
        material: 'pine',
        purpose: 'flute'
}
}

const createBeautifulCarving = () => {
    // Return a string representation of the object
    return `The ${woodObject.length} inch ${woodObject.material} was carved into a wooden ${woodObject.purpose}.`
}


// The function returns a value, so that value is stored in a variable
const woodObject = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodObject)  // <-- Missing an argument. Fix it.

console.log(carvingString)