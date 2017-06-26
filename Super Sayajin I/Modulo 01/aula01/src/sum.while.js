const workers = [ 1000, 2500 , 10000 ]

const sumAll = ( list, percent ) => {

  let counter = 0
  let total = 0

  while ( counter < list.length) {
    const percentValue = list[ counter ] * ( percent / 100 )
    const newSalary = list[ counter ] - percentValue

    total += newSalary 
    counter++
  }

  return total
}

console.log( 'Sum of Salaries: ', sumAll( workers, 10 ) )