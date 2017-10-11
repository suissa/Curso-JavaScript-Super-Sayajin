const NOT = ( x ) => !x

const isDivisibleBy = ( y ) => ( x ) => NOT( x % y )

const isEven = isDivisibleBy( 2 )
const isOdd = ( x ) => NOT( isEven( x ) )

const isGreaterThan = ( y ) => ( x ) => x > y
const isLowerThan = ( y ) => ( x ) => x < y

const getSomeEvenNumbers = ( min, max ) => ( x ) => 
  ( isGreaterThan( min )( x ) || isLowerThan( max )( x ) ) &&
  ( isEven( x ) )

const evenLowerThan3ORGreaterThan7 = getSomeEvenNumbers( 7, 3 )

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( evenLowerThan3ORGreaterThan7 )

console.log( 'evenLowerThan3ORGreaterThan7: ', result )

// evenLowerThan3ORGreaterThan7:  [ 1, 9, 10 ]

