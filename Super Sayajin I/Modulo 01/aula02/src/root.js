const pow = ( y ) => ( x ) => Math.pow( x, y )  
const root = ( y ) => ( x ) => Math.pow( x, 1/y )  

const squareRoot = root( 2 )
const cubicRoot = root( 3 )
const fourRoot = root( 4 )

// console.log('raiz quadrada de 9 = ', root( 2 )( 9 ) )
console.log('raiz quadrada de 9 = ', squareRoot( 9 ) )
console.log('raiz cúbica de 27 = ', cubicRoot( 27 ) )
console.log('raiz quarta de 16 = ', fourRoot( 16 ) )

