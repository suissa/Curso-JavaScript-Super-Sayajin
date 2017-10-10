const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( ( value, index ) => {
  console.log( 'value: ', value )
  console.log( 'index: ', index )
  console.log( '---------- \n' )
} )

console.log( 'result: ', result )


// value:  1
// index:  0
// ---------- 

// value:  2
// index:  1
// ---------- 

// value:  3
// index:  2
// ---------- 

// value:  4
// index:  3
// ---------- 

// value:  5
// index:  4
// ---------- 

// value:  6
// index:  5
// ---------- 

// value:  7
// index:  6
// ---------- 

// value:  8
// index:  7
// ---------- 

// value:  9
// index:  8
// ---------- 

// value:  10
// index:  9
// ---------- 

// result:  []
