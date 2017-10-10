const NOT = ( x ) => !x

const isDivisibleBy = ( y ) => ( x ) => NOT( x % y )

const isEven = isDivisibleBy( 2 )
const isOdd = ( x ) => NOT( isEven( x ) )

const N = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const evens = N.filter( isEven )
const odds = N.filter( isOdd )

console.log( 'Pares: ', evens ) // Pares:  [ 2, 4, 6, 8, 10 ]
console.log( 'Ímpares: ', odds ) // Ímpares:  [ 1, 3, 5, 7, 9 ]