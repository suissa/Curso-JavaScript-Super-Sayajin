const inverse = ( x ) => x * -1

const add = ( y ) => ( x ) => x + y
const subtract = ( y ) => ( x ) => add( inverse( y ) )( x )

const multiply = ( y ) => ( x ) => {
// const multiply = ( x, y ) => {

  let result = 0

  const addX = add( x )
  const decrement1 = subtract( 1 )

  while ( y > 0 ) {
    result = addX( result )
    y = decrement1( y )
  }

  return result
}

// console.log('3 x 4 =', multiply( 3, 4 ) )
console.log('3 x 4 =', multiply( 4 )( 3 ) )