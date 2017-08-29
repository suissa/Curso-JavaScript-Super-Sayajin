const inverse = ( x ) => x * -1

const add = ( y ) => ( x ) => x + y
const subtract = ( y ) => ( x ) => add( inverse( y ) )( x )

const multiply = ( y ) => ( x ) => {

  let result = 0

  const addX = add( x )
  const decrement1 = subtract( 1 )

  while ( y > 0 ) {
    result = addX( result )
    y = decrement1( y )
  }

  return result
}
// const pow = ( y ) => ( x ) => {

//   let result = 1

//   while ( y > 0 ) {
//     result = multiply( result )( x )
//     y = subtract( 1 )( y )
//   }

//   return result
// }

const pow = ( y ) => ( x ) => Math.pow( x, y )  

console.log('3 ^ 2 =', pow( 2 )( 3 ) )
console.log('3 ^ 3 =', pow( 3 )( 3 ) )
console.log('3 ^ 4 =', pow( 4 )( 3 ) )
console.log('3 ^ 5 =', pow( 5 )( 3 ) )