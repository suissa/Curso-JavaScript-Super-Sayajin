const deny = ( num ) => num * -1

const x = deny( 10 )
const y = deny( 4 )

const sum = ( x, y ) => x + y
const times = ( x, y ) => x * y

const sumResult = sum( x, y )
const timesesult = times( x, y )

console.log('sumResult', sumResult)
console.log('timesesult', timesesult)

// sumResult -14
// timesesult 40