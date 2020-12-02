const game = {
    suspects: [
        {
            name: 'Rusty',
            color: 'orange',
            guilty: false
        },
        {
            name: 'Miss Scarlet',
            color: 'red',
            guilty: false
        }
    ]
}

// using loop to log each suspect
for(let i = 0; i < game.suspects.length; i++) {
    // console.log(game.suspects[i])
}

// destructuring & assignment

const [orange, red] = [game.suspects[0].color, game.suspects[1].color]

// console.log(orange, red)

const [{color: firstColor}, {color: secondColor}] = game.suspects

const nums = [ 1, 2, 3, 4, 5, 6 ]

// for(let i = 0; i < nums.length; i++) {
//     console.log(nums[nums.length - 1 - i])
// }

// spread/rest
// rest parameters collect all remaining elements into an array
const createTuple = (a, b, c, ...extraArgs) => {
    return [[a, b], [c], extraArgs]
}

// console.log(createTuple(1, 2, 3, 4, 5, 6, 7,))

const add = (...args) => { // arrow functions have no 'arguments' keyword
        let result = 0;
        for (let arg of args) { result += arg }
        return result
}
    
add(1) // returns 1
add(1,2) // returns 3
// console.log(add(1, 2, 3, 4, 5)) // returns 15

// spread operator allows us to unpack elements in an array to single/individual arguments
// unpacking/spreading, copying
const arr = [1, 2, 3]
const arr2 = [...arr]
const myNames = [...arr, "joykare"]


const createTupleA = function(a, b, c, ...d) {
    console.log(arguments) //regular functions has access to the 'arguments' keyword
    // [Arguments] {
    //     '0': 'It',
    //     '1': 'be',
    //     '2': 'could',
    //     '3': 'anyone',
    //     '4': 'no one'
    //   }
    return [[a, c], [b, d]] // [ [ 'It', 'could' ], [ 'be', [ 'anyone', 'no one' ] ] ]
}

// default parameters
const added = function(a, b = 2) {
    console.log(arguments) // arguments keyword only cares about values explicitly passed in as arguments
                            // not default values 
    return a + b
}

// Array.from - working with array-like object

const constructArray = function() {
    const arr = Array.from(arguments) // Array.prototype.slice.call(arguments)
    // [ 'hello', 'there', 'buddy' ]
    console.log(arr)
}

// constructArray('hello', 'there', 'buddy')  

// ## Higher-Order Functions
// higher-order functions can take a function as an input
// returns a function as the output

// const ifElse = (condition, isTrueFn, isFalseFn) => {
//     return condition ? isTrueFn() : isFalseFn()
// }

// const logTrue = () => { console.log(true) }
// const logFalse = () => { console.log(false) }

// console.log(ifElse(true, logTrue, logFalse))

const increment = num => { return num + 1 }
const square = num => { return num * num }
const doSomeMath = (num, fn) => { return fn(num)}

// console.log(doSomeMath(5, square), doSomeMath(4, increment))

// passing arguments 
// const ifElse = (condition, isTrueFn, isFalseFn, parameter) => {
//     return condition ? isTrueFn(parameter) : isFalseFn(parameter)
// }

// const ifElse = (condition, isTrueFn, isFalseFn, parameter, ...args) => {
//     // args = looks like [...args]
//     return condition ? isTrueFn(parameter) : isFalseFn(parameter)
// }

// const ifElse = function(condition, isTrue, isFalse) {
//     const args = [].slice.call(arguments, 3)
//     console.log(args) The apply() method accepts arguments in an array:
//     return condition ? isTrue.apply(this, [args]) : isFalse.apply(this, [args])
// }

// const logTrue = (msgs) => { console.log(msgs) }
// const logFalse = (msgs) => { console.log(msgs) }

// ifElse(true, logTrue, logFalse, 'hi ', 'is ', 'this ', 'working', '?')

// implement reduce for addition

const reduce = function(arr, cb, initial) {
    let accumulator = initial
    for(let i = 0; i < arr.length; i++) {
        if(i === 0 && accumulator === undefined) {
            accumulator = arr[0]
        } else {
            accumulator = cb(arr[i], accumulator)
        }
    }
    return accumulator
}

// console.log(reduce([1, 2, 3], (v, sum) => v + sum))


// Get all the rooms that no-one has been in
const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
]

// Advanced Scope

const myAlert = () => {
    const x = 'Hello'
    let count = 0
    const alerter = () => {
        alert(`${x} ${++count}`)
    }

    return alerter
}

const funcAlert = myAlert() // returns alerter
const funcAlert2 = myAlert() // returns alerter, creates a new execution context - which means count will be 0 and seperate form above funcAlert
funcAlert() // goes into alerter function body, alert message = 'Hello, 1'
funcAlert() // goes into alerter function body, retains the same execution context, which means the alert message = 'Hello, 2'

const newClue = name => {
    const length = name.length 

    return (weapon) => {
        let clue = length + weapon.length 
        return !!(clue % 1)
    }
}

const didHeDoItWithA = newClue('Mr.Green')
// didHeDoItWithA looks like:

// (weapon) => {
//     let clue = length + weapon.length // length is being retained as 'Mr.Green'.length always
//     return !!(clue % 1)
// }