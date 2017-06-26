
const workers = [ 1000, 4000 , 10000 ]

const withdraw = ( list, percent ) => {

  let counter = 0
  let newList = []
  let media = 0

  while ( counter < list.length) {
    const percentValue = list[ counter ] * ( percent / 100 )
    const newSalary = list[ counter ] - percentValue

    newList[ counter ] = newSalary 
    media += newSalary
    counter++
  }

  return media / list.length
}

console.log( 'Media of Salaries: ', withdraw( workers, 10 ) )