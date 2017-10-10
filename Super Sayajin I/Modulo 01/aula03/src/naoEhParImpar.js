const NOT = ( x ) => !x

const isDivisibleBy = ( y ) => ( x ) => NOT( x % y )

const isDivisibleBy2 = isDivisibleBy( 2 )

const isEven = ( x ) => isDivisibleBy2( x )
const isOdd = ( x ) => NOT( isEven( x ) )

console.log( '------------------------------------' )
console.log( 'isEven 4: ', isEven( 4 ) )
console.log( 'isEven 5: ', isEven( 5 ) )
console.log( '------------------------------------' )
console.log( 'isOdd 4: ', isOdd( 4 ) )
console.log( 'isOdd 5: ', isOdd( 5 ) )
console.log( '------------------------------------' )


// ------------------------------------
// isEven 4:  true
// isEven 5:  false
// ------------------------------------
// isOdd 4:  false
// isOdd 5:  true
// ------------------------------------
