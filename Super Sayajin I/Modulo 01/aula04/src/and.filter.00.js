const isGreaterThan = ( y ) => ( x ) => x > y

const isGreaterThan5 = isGreaterThan( 5 )
const isGreaterThan8 = isGreaterThan( 8 )

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( isGreaterThan5 )
const result2 = list.filter( isGreaterThan8 )

console.log( 'isGreaterThan5: ', result )
console.log( 'isGreaterThan8: ', result2 )

// isGreaterThan5:  [ 6, 7, 8, 9, 10 ]
// isGreaterThan8:  [ 9, 10 ]
