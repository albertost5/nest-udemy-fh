// import axios from 'axios';
import { Move, PokeApiResponse } from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter, PokeApiFetchAdapter, HttpAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        // To do: Inject dependencies
        private readonly http: HttpAdapter
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    // async getMoves(): Promise<Move[]> {
    //     const { data } = await axios.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon/4');
    //     console.log(data.moves);

    //     return data.moves;
    // }

    async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        return data.moves;
    }

}

// SOLID: Liskov
const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApiFetch);
export const charmander2 = new Pokemon(4, 'Charmander', pokeApiAxios);

charmander.getMoves();
charmander2.getMoves();
