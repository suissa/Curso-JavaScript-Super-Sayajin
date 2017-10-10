# Aula 3 - Lógica Booleana - Negação

Nessa aula inicial sobre Lógica iremos aprender o real valor de uma negação<br>
e como reusar nossos testes lógicos para filtrar valores.

![](https://blog.digilentinc.com/wp-content/uploads/2014/12/boolean-true-false.png)

## Desafio

Criar uma função, composta por outras menores, que calcule a fórmula de Bhaskara.<br> 
Entretando quero que você resolva manualmente a primeira vez e depois transcreva<br>
seus passos em funções.

![](https://i.imgur.com/x7besae.png)

<br>

**E explique o porquê da sua sequência de passos!**


## Lógica Booleana

![This is George Boole](https://image.slidesharecdn.com/booleanlogic-130530132337-phpapp01/95/boolean-logic-how-to-talk-to-search-engines-in-their-own-language-2-638.jpg?cb=1369922108)


> Em álgebra abstrata, álgebras booleanas (ou álgebras de Boole) são estruturas<br> algébricas que "captam as propriedades essenciais" dos operadores lógicos e de conjuntos,<br> ou ainda oferecem uma estrutura para se lidar com "afirmações"...

fonte: [Álgebra booleana - Wikipedia](https://pt.wikipedia.org/wiki/%C3%81lgebra_booleana)


![Eu não entendi nada](http://geradormemes.com/media/created/a52del.jpg)

Então vamos ver se a definição nos ajuda:

![Definição da Wikipedia](https://i.imgur.com/KNTdlii.png)

![WAT](http://i0.kym-cdn.com/photos/images/original/000/608/147/05a.jpg)

Concordo que piorou, então vou trocar em miúdos para você:


Na Álgebra Booleana você pode trabalhar apenas com 2 valores:

- 0: falso
- 1: verdadeiro

Você pode inverter esses valores utilizando a única operação unária:

- negação: ~ ou ! (no JavaScript)

E fazer operações lógicas utilizando esses 2 operadores:

- ou: V ou || (no JavaScript)
- e: /\ ou && (no JavaScript)


É exatamente com essas bases acima que criamos, quase, qualquer programa.

![Boolean Operations](https://i.imgur.com/0CLxetP.png)

Antes de explicar-lhe como funciona cada coisa quero que você analise a seguinte saída:

```

0 E 0 =  0
0 E 1 =  0
1 E 0 =  0
1 E 1 =  1

------------------------------------

0 OU 0 =  0
0 OU 1 =  1
1 OU 0 =  1
1 OU 1 =  1

```

**Essa é a tabela verdade para E e OU lógicos!**

> Analisando ela, o que você pode inferir???

Para fazermos essa análise vamos pensar o seguinte:

Precisamos identificar as discrepâncias entre um e outro, pois já sabemos que<br>
nos dois casos quando comparamos dois valores iguais o retorno é o mesmo valor.

Com isso podemos identificar o seguinte:

```

0 E 1 =  0
1 E 0 =  0

------------------------------------

0 OU 1 =  1
1 OU 0 =  1

```

**No caso do `E` podemos inferir que se ele for utilizado em conjunto de uma premissa**<br>
**falsa (`0`) seu retorno SEMPRE será `0`.**

**No caso do `OU` podemos inferir que se ele for utilizado em conjunto de uma premissa**<br>
**verdadeira (`1`) seu retorno SEMPRE será `1`.**

Uma outra dica bem simples para se acostumar com as inferências lógicas é trocar o <br>
`E` por multiplicação `*` e o `OU` por soma `+`.

```

0 * 0 =  0
0 * 1 =  0
1 * 0 =  0
1 * 1 =  1

------------------------------------

0 + 0 =  0
0 + 1 =  1
1 + 0 =  1
1 + 1 =  1 // 2 > 0 == 1

```

Com isso vemos claramente que qualquer teste lógico **com E** que possua QUALQUER uma<br> das premissas falsas, o resultado SEMPRE será falso. Entretanto com o **OU** basta que uma<br>
das premisas seja verdadeira que o resultado SEMPRE será verdadeiro.

## Exemplo


Imagine comigo o Conjunto dos Números Naturais, sem o zero( N*), e queremos filtrar<br> 
ele em dois sub-conjuntos: Números Pares e Ímpares.

Esse com certeza é um dos testes lógicos mais simples que existem.

Primeiramente vamos aos seus conceitos:

> Um número inteiro qualquer é dito par se, ao ser dividido pelo número dois, <br>
> resulta em um número inteiro, caso contrário esse número é dito ímpar.

*fonte: https://pt.wikipedia.org/wiki/N%C3%BAmeros_pares_e_%C3%ADmpares*

### Divisibilidade

Nesse momento você precisa lembrar o que significa um número ser dividido por outro:


> Um número é divisível por outro quando o resto da divisão entre os dois é igual a zero.

*fonte: https://matematicabasica.net/criterios-de-divisibilidade/*

### Resto da divisão

Olha só como recebemos o resto de uma divisão no JavaScript:

- Operador: var1 % var2

fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

### Testando se é Par

Juntando o conteúdo acima podemos facilmente criar a seguinte função:

```js
const ehPar = ( x ) => x % 2 === 0
```


### Testando se é Ímpar

Logicamente podemos negar a comparação com o resto e fazer o teste assim:

```js
const ehImpar = ( x ) => x % 2 !== 0
```

Mas espere um pouco! Relembre comigo a definição do Ímpar:

> …é dito par se, ao ser dividido pelo número dois, resulta em um número inteiro, <br> 
> caso contrário esse número é dito ímpar.

## Negação

Se levarmos isso para Programação Funcional precisamos reaproveitar o máximo possível<br> 
nossas funções, seguindo esse pensamento vamos transformar a função ehImpar no contrário da função ehPar.<br>
Para isso utilizamos o operador `!` que denota a negação lógica, dessa forma:


```js
const ehPar = ( x ) => x % 2 === 0
const ehImpar = ( x ) => !ehPar( x )
```


Entretanto podemos utilizar a negação em mais uma parte desse código.

> Vamos relembrar quais são os valores que o JavaScript entende como falso?

```
> if( !"" ) console.log('falso')
falso
> if( !0 ) console.log('falso')
falso
> if( !NaN ) console.log('falso')
falso
> if( !null ) console.log('falso')
falso
> if( !undefined ) console.log('falso')
falso
> if( !false ) console.log('falso')
falso
```

- "";
- 0;
- NaN;
- null;
- undefined;
- false.

**Ou seja, qualquer outro valor entra como verdadeiro!**

> Entendeu como eu testei os valores???

Para que a mensagem `falso` fosse mostrada o valor precisa ser falso, pois com isso eu nego<br> 
ele com `!` e com isso ele entra no `if` tendo seu valor invertido/negado.

Com isso vimos que o valor `0` é entendido como falso, podemos então pensar no seguinte:

- preciso retornar verdadeiro se for Par;
- qualquer número par terá resto 0 quando dividido por 2;
- posso pegar o resto e negar ele para virar verdadeiro;
- e retornar.

Colocando isso em JavaScript:

```js
const ehPar = ( x ) => !x % 2
// ehPar(4)
// 0
// ehPar(5)
// 0
```

> É! Deu merda, sabe por quê?

Lembra que na Matemática temos que utilizar parênteses para informar a precedência das operações?<br> 

Precisamos utilizar esse mesmo conceito aqui para solucionar esse problema.<br> 

Quando utilizamos apenas `!x % 2` isso diz para o JavaScript negar o valor de `x` , ou seja,<br> 
qualquer número maior que `0` resultará em `0/false`.

```js
const ehPar = ( x ) => !x % 2
// ehPar(4) !4 % 2 -> false % 2
// 0
// ehPar(5) !5 % 2 -> false % 2
// 0
```

Por isso precisamos utilizar os `()` para encapsular nossa operação `x % 2` e apenas após<br>
o SEU resultado que iremos aplicar a negação `!`:

```js
const ehPar = ( x ) => !( x % 2 )
const ehImpar = ( x ) => !ehPar( x )
```

## Funcionalizando

Com tudo isso que foi demonstrado anteriormente podemos chegar na seguinte solução,<br> 
seguindo os conceitos do Paradigma Funcional e traduzindo para o Inglês:

```js
const NOT = ( x ) => !x

const isDivisibleBy = ( y ) => ( x ) => NOT( x % y )

const isEven = isDivisibleBy( 2 )
const isOdd = ( x ) => NOT( isEven( x ) )

console.log( '------------------------------------' )
console.log( 'isEven 4: ', isEven( 4 ) )
console.log( 'isEven 5: ', isEven( 5 ) )
console.log( '------------------------------------' )
console.log( 'isOdd 4: ', isOdd( 4 ) )
console.log( 'isOdd 5: ', isOdd( 5 ) )
console.log( '------------------------------------' )

// ------------------------------------
// isEven 4:  true
// isEven 5:  false
// ------------------------------------
// isOdd 4:  false
// isOdd 5:  true
// ------------------------------------
```

**Com isso conseguimos separar nossa lógica em funções atômicas e que podem**<br> 
**ser facilmente reaproveitadas!**

## Utilizando nossas funções

> Você achou que era só isso?

Vou demonstrar como usar as funções anteriores para filtrar os números de um *Array*:

```js
const NOT = ( x ) => !x

const isDivisibleBy = ( y ) => ( x ) => NOT( x % y )

const isEven = isDivisibleBy( 2 )
const isOdd = ( x ) => NOT( isEven( x ) )

const N = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const evens = N.filter( isEven )
const odds = N.filter( isOdd )

console.log( 'Pares: ', evens ) // Pares:  [ 2, 4, 6, 8, 10 ]
console.log( 'Ímpares: ', odds ) // Ímpares:  [ 1, 3, 5, 7, 9 ]
```

## [Filter](http://mdn.io/filter)

Como vimos no exemplo anterior eu utilizei a função [filter](http://mdn.io/filter), a qual **só pode**<br>
**ser utilizada a partir de um Array** e seu resultado é um *Array* novo. Porém contendo **APENAS**<br>
os valores que passaram por um teste lógico.

Vamos ver um exemplo sem retornar nada:

```js
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
```

Agora retornando verdadeiro para qualquer valor:

```js
const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( ( value, index ) => {
  console.log( 'value: ', value )
  console.log( 'index: ', index )
  console.log( '---------- \n' )

  return true
} )

console.log( 'result: ', result )
// ...
// result:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

Já podemos perceber que o resultado são todos os elementos do *Array*, <br>
agora vamos colocar um teste lógico simples:

```js
const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( ( value, index ) => {
  return value > 5
} )

console.log( 'result: ', result )

// result:  [ 6, 7, 8, 9, 10 ]
```

Vamos refatorar o código colocando em *one-line function*:

```js
const result = list.filter( ( value ) => value > 5 )
```

Com isso podemos separar a função do teste lógico e apenas passar ela<br>
como parâmetro para a função `filter`. E será exatamente esse padrão que<br>
utilizaremos durante todo o curso:

```js
const isGreaterThan5 = ( value ) => value > 5

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( isGreaterThan5 )

console.log( 'result: ', result )

// result:  [ 6, 7, 8, 9, 10 ]
```

Agora podemos deixar nossa função para testar se é maior mais genérica<br>
para que possamos reaproveitá-la:

```js
const isGreaterThan = ( y ) => ( x ) => x > y

const isGreaterThan5 = isGreaterThan(5)
const isGreaterThan8 = isGreaterThan(8)

const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const result = list.filter( isGreaterThan5 )
const result2 = list.filter( isGreaterThan8 )

console.log( 'isGreaterThan5: ', result )
console.log( 'isGreaterThan8: ', result2 )

// isGreaterThan5:  [ 6, 7, 8, 9, 10 ]
// isGreaterThan8:  [ 9, 10 ]

```

Para criarmos uma função genérica e reaproveitável normalmente criamos ela<br>
como uma *closure*, ou seja, uma função que retorna outra função.

> Por que fazemos isso? Não deixa mais complicado?

Bom eu não vejo que deixa mais complicado se você já se acostumar com esse formato<br>
desde o início e fazemos isso para que possamos criar funções mais específicas que<br>
necessitem de um valor inicial.

Sempre que você achar que irá reutilizar a mesma **lógica** (é divisível por, <br>
é maior/menor que, etc), você deve/pode separar em 2 funções.

Onde na primeira você receberá o valor de base e na segunda o valor a ser testado.

Lembre desse exemplo da aula passada:

```js
const pow = ( y ) => ( x ) => Math.pow( x, y )  
const root = ( y ) => ( x ) => Math.pow( x, 1/y )  

const squareRoot = root( 2 ) // Math.pow( x, 1/2 ) 
const cubicRoot = root( 3 ) // Math.pow( x, 1/3 ) 
const fourRoot = root( 4 ) // Math.pow( x, 1/4 ) 
```

Criamos as funções especializadas como resultado da execução da função `root`, a qual<br>
receber como valor o índice da raíz (2, 3, 4) e só na próxima execução que irá<br>
realmente fazer o cálculo desejado.

<hr>

## Exercício

Utilizando o conjunto dos Números Naturais do `1` ao `10`, crie uma função para:<br>

- filtrar apenas os números que sejam resultado de uma raíz quadrada
  - onde o radicando seja maior que 20
- filtrar apenas os números que sejam resultado de uma raíz cúbica
  - onde o radicando seja ímpar
