// import { printObject, genericFunction } from "./generics/generics";

import { printObject, genericFunction, genericFunctionArrow } from "./generics/generics"

// printObject( 123 );
// printObject( new Date() );
// printObject( {a:1, b:2, c:3} );
// printObject( [1,2,3,4,5,6,7,8,9,19] );
// printObject( 'Hola Mundo' );

const name: string = 'Yuri';

console.log( genericFunctionArrow(3.141618).toFixed(2) )
console.log( genericFunctionArrow( name).toUpperCase() )
console.log( genericFunctionArrow( new Date() ).getDate() )


