# Aula 4 - Lógica Booleana - E OU

Após conhecermos a negação lógica vamos aprender os conectivos lógicos:

- E - AND - &&
- OU - OR - ||

![](https://vicgrout.files.wordpress.com/2014/07/truthtables.gif)


## Desafio


## E 

Como já vimos na aula passada, sabemos que para um teste lógico com `E`<br>
resultar em verdadeiro TODAS as premissas PRECISAM ser verdadeiras. Caso<br>
tenha apenas um falsa, o resultado também será falso.

Relembrando sua tabela verdade:

```

0 E 0 =  0
0 E 1 =  0
1 E 0 =  0
1 E 1 =  1

```


```js
const isGreaterThan = ( y ) => ( x ) => x > y
const isLowerThan = ( y ) => ( x ) => x < y

const isGreaterThan5 = isGreaterThan( 5 )
const isLowerThan8 = isLowerThan( 8 )

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( isGreaterThan5 )
const result2 = list.filter( isLowerThan8 )

console.log( 'isGreaterThan5: ', result )
console.log( 'isLowerThan8: ', result2 )

// isGreaterThan5:  [ 6, 7, 8, 9, 10 ]
// isLowerThan8:  [ 1, 2, 3, 4, 5, 6, 7 ]

```

```js
const isGreaterThan = ( y ) => ( x ) => x > y
const isLowerThan = ( y ) => ( x ) => x < y

const isGreaterThan5 = isGreaterThan( 5 )
const isLowerThan8 = isLowerThan( 8 )

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( isGreaterThan5 ).filter( isLowerThan8 )

console.log( 'isGreaterThan5 AND isLowerThan8: ', result )

// isGreaterThan5 AND isLowerThan8:  [ 6, 7 ]
```



```js
const isGreaterThan = ( y ) => ( x ) => x > y
const isLowerThan = ( y ) => ( x ) => x < y

const isGreaterThan5 = isGreaterThan( 5 )
const isLowerThan8 = isLowerThan( 8 )

const isGreaterThan5ANDisLowerThan8 = ( x ) =>
  isGreaterThan5( x ) && isLowerThan8( x )

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( isGreaterThan5ANDisLowerThan8 )

console.log( 'isGreaterThan5ANDisLowerThan8: ', result )

// isGreaterThan5ANDisLowerThan8:  [ 6, 7 ]
```


```js
const isGreaterThan = ( y ) => ( x ) => x > y
const isLowerThan = ( y ) => ( x ) => x < y

const isGreaterThan5 = isGreaterThan( 5 )
const isLowerThan8 = isLowerThan( 8 )

const isGreaterThan5ANDisNOTLowerThan8 = ( x ) =>
  isGreaterThan5( x ) && !isLowerThan8( x )

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( isGreaterThan5ANDisNOTLowerThan8 )

console.log( 'isGreaterThan5ANDisNOTLowerThan8: ', result )

// isGreaterThan5ANDisNOTLowerThan8:  [ 8, 9, 10 ]

```


```js
const isGreaterThan = ( y ) => ( x ) => x > y
const isLowerThan = ( y ) => ( x ) => x < y

const isGreaterThan5 = isGreaterThan( 5 )
const isLowerThan8 = isLowerThan( 8 )

const isInRange = ( min, max ) => ( x ) => 
  isGreaterThan( min )( x ) && isLowerThan( max )( x )

const isBetween2AND8 = isInRange( 2, 8 )

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( isBetween2AND8 )

console.log( 'isBetween2AND8: ', result )

// isBetween2AND8:  [ 3, 4, 5, 6, 7 ]
```


### Exemplo


## OU


Relembrando sua tabela verdade:

```

0 OU 0 =  0
0 OU 1 =  1
1 OU 0 =  1
1 OU 1 =  1


```

### Exemplo

<hr>

## Exercício

Utilizando o conjunto dos Números Naturais do `1` ao `10`, crie uma função para:<br>

- filtrar apenas os números que sejam resultado de uma raíz quadrada
  - onde o radicando seja maior que 20
- filtrar apenas os números que sejam resultado de uma raíz cúbica
  - onde o radicando seja ímpar
