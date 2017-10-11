const isGreaterThan = ( y ) => ( x ) => x > y
const isLowerThan = ( y ) => ( x ) => x < y

const isGreaterThan5 = isGreaterThan( 5 )
const isLowerThan8 = isLowerThan( 8 )

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( isGreaterThan5 )
const result2 = list.filter( isLowerThan8 )

console.log( 'isGreaterThan5: ', result )
console.log( 'isLowerThan8: ', result2 )

// isGreaterThan5:  [ 6, 7, 8, 9, 10 ]
// isLowerThan8:  [ 1, 2, 3, 4, 5, 6, 7 ]
