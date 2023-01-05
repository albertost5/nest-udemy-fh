
// export const pkmnIds = [1, 2, 3, 4, 5];

// // pkmnIds.push('1234')
// pkmnIds.push(+'1234')

// export const pkmn = {
//     name: 'charizard',
//     id: 1
// }

interface Pokemon {
    id: number;
    name: String;
    type?: String;
}

export const charizard: Pokemon = {
    id: 1,
    name: 'Charizard',
    type: 'Fire'
}

export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander'
}

// export const charmander = new Pokemon();
// Interface vs Classes


export const pkmns: Pokemon[] = []

pkmns.push(charizard, charmander);