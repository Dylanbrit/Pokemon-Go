const types = ['electric', 'grass', 'fire', 'water', 'normal', 'fighting', 'psychic', 'bug', 'poison', 'rock', 'ground', 'flying',
    'ghost', 'ice', 'dragon', 'steel', 'dark'
]

const typeOrder = {
    electric: 0,
    grass: 1,
    fire: 2,
    water: 3,
    normal: 4,
    fighting: 5,
    psychic: 6,
    bug: 7,
    poison: 8,
    rock: 9,
    ground: 10,
    flying: 11,
    ghost: 12,
    ice: 13,
    dragon: 14,
    steel: 15,
    dark: 16
}

const typeChart = {
    electric: [1,1,2,4,2,2,2,2,2,2,0,4,2,2,1,2,2],
    grass: [2,1,1,4,2,2,2,1,1,4,4,1,2,2,1,1,2],
    fire: [2,4,1,1,2,2,2,4,2,1,2,2,2,4,1,4,2],
    water: [1,1,4,1,2,2,2,2,2,4,4,2,2,2,1,2,2],
    normal: [2,2,2,2,2,2,2,2,2,1,2,2,0,2,2,1,2],
    fighting: [2,2,2,2,4,2,1,1,1,4,2,1,0,4,2,4,4],
    psychic: [2,2,2,2,2,4,1,2,4,2,2,2,2,2,2,1,0],
    bug: [2,4,1,2,2,1,4,1,1,1,1,1,1,2,2,1,4],
    poison: [2,4,2,2,2,2,1,1,1,1,2,2,2,2,2,0,2],
    rock: [2,2,4,2,2,1,2,4,2,1,1,4,2,4,2,1,2],
    ground: [],
    flying: [],
    ghost: [],
    ice: [],
    dragon: [],
    steel: [],
    dark: []
}

const pikachu = {
    name: 'Pikachu',
    type: 'electric',
    move: 'thunderbolt',
    moveType: 'electric'
}

const sandshrew = {
    name: 'Sandshrew',
    type: 'ground',
    move: 'dig',
    moveType: 'ground'
}



// const damage = (userAttack, userType) => {
//     if (userAttack)
// }

// https://gist.github.com/agarie/2620966

// https://codegolf.stackexchange.com/questions/55823/its-super-effective

// https://codereview.stackexchange.com/questions/60965/pokemon-type-evaluator