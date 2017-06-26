const times = ( y ) => ( x ) => x * y

const double = times( 2 )
const triple = times( 3 )
const tenTimes = times( 10 )

const doubleResult = double( 5 )
const tripleResult = triple( 5 )
const tenTimesResult = tenTimes( 5 )

console.log( 'doubleResult', doubleResult )
console.log( 'tripleResult', tripleResult )
console.log( 'tenTimesResult', tenTimesResult )