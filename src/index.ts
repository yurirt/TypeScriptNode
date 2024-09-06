import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

// console.log(charmander.savePokemonToDB(50));

// charmander.savePokemonToDB(5);
charmander.publicApi = 'https://yuri-rojas.com';
console.log( charmander );

