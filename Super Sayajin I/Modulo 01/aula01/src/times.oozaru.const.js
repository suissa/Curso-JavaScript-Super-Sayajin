const sum = function ( y ) {
  return function  ( x ) { 
    return x + y 
  }
}

const times = function ( y ) {
  return function  ( x ) { 
    let result = 0

    const sumX = sum( result )

    while ( y > 0 ) { // ( y )
      result += sumX( x )
      y--
    }

    return result
  }
}

console.log('3 times 4', times( 4 )( 3 ) )