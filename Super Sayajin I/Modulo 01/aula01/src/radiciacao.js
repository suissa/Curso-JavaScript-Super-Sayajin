const pow = require('./exponenciacao')

const root = ( y ) => ( x ) => 
  pow( 1 / y )( x )
    

// module.exports = root


const raizQuadrada = root( 2 )
const raizCúbica = root( 3 )
const raiz10De = root( 10 )

const num2 = 16
const num3 = 27
const num10 = 1024

console.log( `\n Raiz quadrada de ${num2} é:`, raizQuadrada( num2 ) )
console.log( `\n Raiz cúbica de ${num3} é:`, raizCúbica( num3 ) )
console.log( `\n Raiz décima de ${num10} é:`, raiz10De( num10 ) )