const NOT = ( x ) => !x

const isDivisibleBy = ( y ) => ( x ) => NOT( x % y )

const isEven = isDivisibleBy( 2 )
const isOdd = ( x ) => NOT( isEven( x ) )

const isGreaterThan = ( y ) => ( x ) => x > y
const isLowerThan = ( y ) => ( x ) => x < y

const getSomeNumbers = ( min, max, isSomething ) => ( x ) => 
  ( isGreaterThan( min )( x ) || isLowerThan( max )( x ) ) &&
  ( isSomething( x ) )

const evensLowerThan3ORGreaterThan7 = getSomeNumbers( 7, 3, isEven )
const oddsLowerThan3ORGreaterThan7 = getSomeNumbers( 7, 3, isOdd )

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log( 'evenLowerThan3ORGreaterThan7: ', list.filter( evensLowerThan3ORGreaterThan7 ) )
console.log( 'oddsLowerThan3ORGreaterThan7: ', list.filter( oddsLowerThan3ORGreaterThan7 ) )

// evenLowerThan3ORGreaterThan7:  [ 1, 9, 10 ]

