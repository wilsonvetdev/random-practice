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

