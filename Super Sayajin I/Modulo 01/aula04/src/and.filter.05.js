const isGreaterThan = ( y ) => ( x ) => x > y
const isLowerThan = ( y ) => ( x ) => x < y

const isGreaterThan5 = isGreaterThan( 5 )
const isLowerThan8 = isLowerThan( 8 )

const isInRange = ( min, max ) => ( x ) => 
  isGreaterThan( min )( x ) && isLowerThan( max )( x )

const isBetween2AND8 = isInRange( 2, 8 )

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( isBetween2AND8 )

console.log( 'isBetween2AND8: ', result )

// isBetween2AND8:  [ 3, 4, 5, 6, 7 ]

