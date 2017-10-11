const isGreaterThan = ( y ) => ( x ) => x > y
const isLowerThan = ( y ) => ( x ) => x < y

const isGreaterThan5 = isGreaterThan( 5 )
const isLowerThan8 = isLowerThan( 8 )

const isGreaterThan5ANDisNOTLowerThan8 = ( x ) =>
  isGreaterThan5( x ) && !isLowerThan8( x )

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( isGreaterThan5ANDisNOTLowerThan8 )

console.log( 'isGreaterThan5ANDisNOTLowerThan8: ', result )

// isGreaterThan5ANDisNOTLowerThan8:  [ 8, 9, 10 ]
