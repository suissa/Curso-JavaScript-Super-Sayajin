const NOT = ( x ) => !x

const isDivisibleBy = ( y ) => ( x ) => NOT( x % y )

const isEven = isDivisibleBy( 2 ) // ( x ) => NOT( x % 2 )
const isOdd = ( x ) => NOT( isEven( x ) )

console.log( '------------------------------------' )
console.log( 'isEven 4: ', isEven( 4 ) )
console.log( 'isEven 5: ', isEven( 5 ) )
console.log( '------------------------------------' )
console.log( 'isOdd 4: ', isOdd( 4 ) )
console.log( 'isOdd 5: ', isOdd( 5 ) )
console.log( '------------------------------------' )
