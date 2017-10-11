const NOT = ( x ) => !x

const isDivisibleBy = ( y ) => ( x ) => NOT( x % y )

const isEven = isDivisibleBy( 2 )
const isOdd = ( x ) => NOT( isEven( x ) )

const isGreaterThan = ( y ) => ( x ) => x > y
const isLowerThan = ( y ) => ( x ) => x < y

const getSomeNumbers = ( min, max ) => ( x ) => 
  isGreaterThan( min )( x ) || isLowerThan( max )( x )

const isNOTBetween2AND8 = getSomeNumbers( 8, 2 )

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( isNOTBetween2AND8 )

console.log( 'isNOTBetween2AND8: ', result )

// isNOTBetween2AND8:  [ 1, 9, 10 ]

