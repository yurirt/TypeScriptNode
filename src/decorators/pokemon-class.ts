function printToConsole( constructor: Function ){
    console.log( constructor );
}

const printToConsoleConditional = ( print:boolean = false ): Function => {
    // return () => console.log('Hola Mundo'); 
    if( print ){
        return printToConsole;
    }else{
        return() => {}
    }

}

const bloquearPrototipo = function( constructor: Function ){
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

function ChekValidPokemonId(){
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ){
        // console.log({target, propertyKey, descriptor});
        // descriptor.value = () => console.log( 'Hola Mundo' );
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {

            if(id < 1 || id > 800 ){
                return console.log('El id del pokemon debe estar entre 1 y 800');
            }else{
                return originalMethod(id);
            }


        }
    }
}



@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {

     public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ) {
        
    }

    @ChekValidPokemonId()
    savePokemonToDB(id: numeber) {
        console.log(`Pokemon guardado en DB ${ id }`);
    }
}