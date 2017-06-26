const workers = [ 1000, 2500 , 10000 ]

const withdraw = ( list, percent ) => {

  let counter = 0
  let newList = []

  while ( counter < list.length) {
    const percentValue = list[ counter ] * ( percent / 100 )
    const newSalary = list[ counter ] - percentValue

    newList[ counter ] = newSalary 
    counter++
  }

  return newList
}

console.log( 'New Salaries: ', withdraw( workers, 10 ) )