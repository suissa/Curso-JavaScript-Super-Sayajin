const tabelaVerdade = [
  [ 0, 0 ],
  [ 0, 1 ],
  [ 1, 0 ],
  [ 1, 1 ]
]

const testeE = ( premissa ) => {
  const result = premissa[ 0 ] && premissa[ 1 ]
  console.log( premissa[ 0 ] + ' E ' + premissa[ 1 ] + ' = ',
    premissa[ 0 ] && premissa[ 1 ] )
}

const testeOU = ( premissa ) => {
  const result = premissa[ 0 ] || premissa[ 1 ]
  console.log( premissa[ 0 ] + ' OU ' + premissa[ 1 ] + ' = ',
    premissa[ 0 ] || premissa[ 1 ] )
}

const E = ( premissas ) => premissas.forEach( testeE )
const OU = ( premissas ) => premissas.forEach( testeOU )

E( tabelaVerdade )
console.log( '------------------------------------' )
console.log( '\n' )
console.log( '------------------------------------' )
OU( tabelaVerdade )
