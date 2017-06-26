const sum = ( y ) => ( x ) => x + y

const times = ( y ) => ( x ) => {

  let result = 0

  while ( y > 0 ) { // ( y )
    result += x
    y--
  }

  return result
}

console.log('3 times 4', times( 4 )( 3 ) )