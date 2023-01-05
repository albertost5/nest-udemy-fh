import axios from 'axios';
import { PokeApiResponse, Move } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    // public id: number;
    // public name: string;

    // constructor(id: number, name: string) {
    //     this.id = id;
    //     this.name = name;
    // }

    get imageUrl(): string {
        return `https://pokemon/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
        this.speak();
    }

    private speak() {
        console.log(`${this.name} ${this.name}!`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        return data.moves;
    }
}

export const pkmn = new Pokemon(1, 'Charizard');

// pkmn.id = 10;
pkmn.name = 'Ekans';

// console.log(pkmn.imageUrl);
// pkmn.scream();
console.log(await pkmn.getMoves());