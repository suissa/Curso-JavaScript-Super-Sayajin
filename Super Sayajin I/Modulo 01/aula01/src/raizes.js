const raiz = require( './radiciacao' )

const raizQuadradaDe = raiz( 2 )
const raizCúbicaDe = raiz( 3 )
const raizdeÍndice4De = raiz( 4 )
const raizdeÍndice10De = raiz( 10 )
 
const num2 = 4
const num3 = 27
const num4 = 1296
const num10 = 1024

console.log( `\n Raiz Quadrada de ${num2} é :`, raizQuadradaDe( num2 ) )
console.log( `\n Raiz Cúbica De ${num3} é :`, raizCúbicaDe( num3 ) )
console.log( `\n Raiz Quadrada de ${num4} é :`, raizdeÍndice4De( num4 ) )
console.log( `\n Raiz Quadrada de ${num10} é :`, raizdeÍndice10De( num10 ) )