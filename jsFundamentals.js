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

for(let i = 0; i < nums.length; i++) {
    console.log(nums[nums.length - 1 - i])
}

// spread/rest
// rest parameters collect all remaining elements into an array
const createTuple = (a, b, c, ...extraArgs) => {
    return [[a, b], [c], extraArgs]
}

console.log(createTuple(1, 2, 3, 4, 5, 6, 7,))

const add = (...args) => { // arrow functions have no 'arguments' keyword
        let result = 0;
        for (let arg of args) { result += arg }
        return result
}
    
add(1) // returns 1
add(1,2) // returns 3
console.log(add(1, 2, 3, 4, 5)) // returns 15

// spread operator allows us to unpack elements in an array to single/individual arguments
// unpacking/spreading, copying
const arr = [1, 2, 3]
const arr2 = [...arr]
const myNames = [...arr, "joykare"]
