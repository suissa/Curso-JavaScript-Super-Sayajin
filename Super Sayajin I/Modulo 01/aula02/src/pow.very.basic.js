const pow = ( y ) => ( x ) => {

  let result = 1

  while ( y > 0 ) {
    result = result * x
    y = y - 1
  }

  return result
}

console.log('3 ^ 2 =', pow( 2 )( 3 ) )
console.log('3 ^ 3 =', pow( 3 )( 3 ) )
console.log('3 ^ 4 =', pow( 4 )( 3 ) )
console.log('3 ^ 5 =', pow( 5 )( 3 ) )