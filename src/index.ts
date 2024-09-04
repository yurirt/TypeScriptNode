// import { Hero as SuperHero, Hero2 } from "./classes/Hero";
import * as HeroClasses from "./classes/Hero";
import powers,{Power} from "./data/powers";
import { Power } from './data/powers';


console.log('Hola Mundo!!!!');

// const ironman = new SuperHero('yuri', 1500,38);
const ironman = new HeroClasses.Hero('yuri', 1500,38);
console.log(ironman);

console.log(powers)




