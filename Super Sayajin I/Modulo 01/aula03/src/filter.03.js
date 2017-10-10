const isGreaterThan5 = ( value ) => value > 5

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( isGreaterThan5 )

console.log( 'result: ', result )

// result:  [ 6, 7, 8, 9, 10 ]
