![Curso - JavaScript Super Saiyajin](http://i.imgur.com/jGXoRO6.png)

# Aula 01 - Conhecendo funções

## O que é uma função?

<br>

> **f( x ) = y**

<br>

> Uma função ou aplicação é uma relação de um conjunto `A` com um conjunto `B`.

*fonte: [Função (matemática) - Wikipedia](https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_(matem%C3%A1tica))*

<br>

![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Venn_diagram_of_a_function.svg/450px-Venn_diagram_of_a_function.svg.png)

<br>

Podemos imaginar que o conjunto `A` é o conjunto dos valores dos nossos <br>
parâmetros e o conjunto `B` é o conjunto dos valores dos resultados.

Logo essa relação entre esses dois conjuntos pode também ser<br> 
uma transformação, filtragem, etc. Por exemplo:


![](http://clubes.obmep.org.br/blog/wp-content/uploads/2015/11/separado.png)

Nesse caso temos duas funções:

- uma filtra os números pares;
- a outra filtra os números ímpares;

Essas duas funções utilizam o mesmo conjunto de entrada, o conjunto dos números Naturais e suas respostas são **sub-conjuntos** dos números Naturais.

> Você sabe que temos outros conjuntos numéricos também né?!


- Conjunto dos Naturais;
- Conjunto dos Inteiros;
- Conjunto dos Racionais;
- Conjunto dos Irracionais;
- Conjunto dos Reais ;



## Entendendo as operações matemáticas básicas

> Na lógica matemática e na ciência da computação, lambda cálculo , também escrito como cálculo-λ é um sistema formal que estuda funções recursivas computáveis, no que se refere a teoria da computabilidade, e fenômenos relacionados, como variáveis ligadas e substituição. Sua principal característica são as entidades que podem ser utilizadas como argumentos e retornadas como valores de outras funções.
> 
> A parte relevante de lambda cálculo para computação ficou conhecida como lambda cálculo não-tipado. O lambda cálculo tipado e o não-tipado tem suas ideias aplicadas nos campos da lógica, teoria da recursão (computabilidade) e linguística, e tem tido um grande papel no desenvolvimento da teoria de linguagens de programação (com a versão não-tipada sendo a inspiração original para programação funcional, em particular Lisp...
> 
> ...
> 
> Como os nomes de funções são uma mera conveniência, o lambda cálculo não tem interesse em nomear uma função. Já que todas as funções esperando mais de um argumento podem ser transformadas em funções equivalentes recebendo uma única entrada (via Currying), o lambda cálculo não tem interesse em criar funções que aceitam mais de um argumento. 

*fonte: [Cálculo lambda - Wikipedia](https://pt.wikipedia.org/wiki/C%C3%A1lculo_lambda)*

<br>

### Reduzindo à apenas uma operação

<br>
<br>

> **Você já pensou que qualquer operação matemática pode ser**<br>
> **reduzida apenas em soma e subtração???**


<br>
<br>

![](http://geradormemes.com/media/created/vuaeem.jpg)

<br>
<br>


> Vou dar uma dica: pode usar apenas soma e números **negativos**!

> Dica matadora essa né?


<br>
<br>

Você pode usar número negativo pois seu sinal é<br> 
[representado por 64 bits, sendo apenas 1 para seu sinal](http://www.2ality.com/2012/04/number-encoding.html).

<br>
<br>

![](http://i.imgur.com/lXqXj6A.png)

<br>
<br>

Então vamos pensar:

```js
5-4=1
5+4=9
5+(-4)=1 
```
<br>

É nessa hora que você lembra do Ensino Médio e a regra de sinais:

- número negativo com número negativo (1° caso)

- número positivo com número positivo (2° caso)

- número negativo com número positivo ou vice-versa (3° caso)


Primeiro caso:

> Quando temos dois números negativos repetimos o sinal de <br>
subtração e somamos esses dois números. 

<br>

```
-12 + -8 = - (12 + 8) = - 20
-10 + -16 = - (10 + 16) = - 26
-15 + -2 = - (15 + 2) = - 17
-11 + -46 = - (11 + 46) = - 57
```

<br>

Segundo caso:

> Quando temos dois números positivos repetimos o sinal de adição <br>
 e somamos esses dois números. 

```
+12 + 8 = + (12 + 8) = + 20
+10 + 16 = + (10 + 16) = + 26
+15 + 2 = + (15 + 2) = + 17
+11 + 46 = + (11 + 46) = + 57
```


Terceiro caso:

> Quando temos um número negativo e outro positivo ou vice-versa devemos repetir o sinal do maior número em módulo e depois devemos subtrair o maior número (em módulo) pelo menor número (também em módulo). 

> O módulo de um número nada mais é do que pegar o valor positivo desse número. O módulo é representado por duas barras dispostas uma no início e outra no fim do número. |-2| === 2


```
+12 + -8 = + (|12| - |-8|) = 4 
+10 + -16 = - (|-16| - |10|) = - 6
+15 + -2 = + (|15| - |-2|) = + 13
+11 + -46 = - (|-46| - |11|) = - 35
```

<br>
<br>

> **A partir desse terceiro caso já matamos a charada!**

<br>
<br>

Agora eu lhe pergunto:

> **Por que um número negativo somado com outro negativo da positivo?**


<br>
<br>

Vamos imaginar o seguinte:

<br>

Na lógica possuimos o operador de negação, que apenas **inverte** um valor,<br>
por exemplo: `!false === true`.

<br>

> Negação, em lógica e matemática, é uma operação unária sobre valores lógicos,<br> 
> por exemplo o valor lógico de uma proposição. Se a proposição é verdadeira,<br> 
> então o operador lógico negação produz o valor falso, e vice versa.

*fonte: [Negação - Wikipedia](https://pt.wikipedia.org/wiki/Nega%C3%A7%C3%A3o)*

<br>

Até ai tudo bem né? 


<br>

**Agora vamos estender esse conceito para os números.**

<br>

Imagine que a negação de um número é o seu inverso e qual o inverso de 4?

Se formos pegar o plano cartesiano no eixo x, o valor de algo é a sua<br>
distância até o ponto `0` nesse eixo. Logo se quisermos inverter esse valor<br>
basta pegarmos essa mesma distância e partirmos do `0` até o valor dessa<br>
distância porém seguindo o eixo x negativo.

<br>

> Simples não???

<br>

Então pense aqui comigo, basta multiplicarmos por `-1` para invertermos<br>
o valor de um número. Sabendo disso acompanhe abaixo:

```
x = -1

-10 + -4 = -14
~10 + ~4 = ~(10 + 4) = ~(14) = -14
10x + 4x = 14x = 14 * -1 = -14

-10 * -4 = 40
~10 * ~4 = ~ * ~(10 * 4) = ~^2(40) = 40
10x * 4x = 40x^2 = 40 * -1 * -1 = -40 * -1 = 40

```

<br>

Perceba que neguei o valor dos valores negativos e depois troquei esse<br>
operador de negação pelo `x` para poder provar lógica-matematicamente.

Na soma `10x + 4x` o resultado é `14x` e na multiplicação é `40x^2`<br>
sabendo que o `x` é a negação então na soma ele apenas nega o valor e<br>
na multiplicação ele nega a negação, pois temos uma dupla negações.

Depois dessa análise podemos facilmente escrever uma função para isso:

```js

const deny = ( num ) => num * -1

const x = deny( 10 )
const y = deny( 4 )

const sum = ( x, y ) => x + y
const times = ( x, y ) => x * y

const sumResult = sum( x, y )
const timesesult = times( x, y )

console.log('sumResult', sumResult)
console.log('timesesult', timesesult)

```

> Beeeeem simples, concorda?

Com isso conseguimos

<br>


```js

const deny = ( num ) => num * -1

const x = deny( 10 )
const y = deny( 4 )

const sum = ( x, y ) => x + y
const times = ( x, y ) => x * y

const sumResult = sum( x, y )
const timesesult = times( x, y )

console.log('sumResult', sumResult)
console.log('timesesult', timesesult)

```

<br>


### Operações básicas

- soma: 
  - ( x, y ) => x + y 
  - ( y ) => ( x ) => x + y 
- subtração:
  - ( x, y ) => soma( x, -y ) 
  - ( y ) => ( x ) => soma( x )( -y ) 
  + invertendo essa operação
- multiplicação: ( utilizando apenas a soma )
  - ( x, y ) => x * y 
  - ( y ) => ( x ) => ...
  + invertendo essa operação
- divisão: ( utilizando apenas a soma )
  - ( x, y ) => x / y 
  - ( y ) => ( x ) => ...
  + invertendo essa operação


Vou demonstrar as duas formas de se escrever essas operações:

```js

const sum = ( x, y ) => x + y 
const sumParcial = ( y ) => ( x ) => x + y 

const minus = ( x, y ) => sum( x, -y ) 
const minusParcial = ( y ) => ( x ) => sumParcial( -y )( x ) 

```

> **Entendeu o porquê estou mostrando como criar essas operações**<br>
**básicas onde recebo apenas um parâmetro por vez?**

> Lembrando que nós só poderemos usar funções que re-usem outras!

<br>

Caso você ainda não tenha entendido ainda irei demonstrar praticamente.

Imagine que você precise de uma função que sempre multiple por `2` qualquer valor.

```js

const double = ( x ) => x * 2

```

Podemos facilmente criar uma função para reaproveitar isso, dessa forma:


```js

const times = ( y ) => ( x ) => x * y

const double = times( 2 )

const doubleResult = double( 5 )

console.log( 'doubleResult', doubleResult ) // doubleResult 10

```

<br>


> Agora vamos fazer uma que multiplique por 3 e outra por 10.


<br>

```js

const times = ( y ) => ( x ) => x * y

const double = times( 2 )
const triple = times( 3 )
const tenTimes = times( 10 )

const doubleResult = double( 5 )
const tripleResult = triple( 5 )
const tenTimesResult = tenTimes( 5 )

console.log( 'doubleResult', doubleResult ) // doubleResult 10
console.log( 'tripleResult', tripleResult ) // tripleResult 15
console.log( 'tenTimesResult', tenTimesResult ) // tenTimesResult 50

```


<br>

> **Muito simples reaproveitar essa função, né?!**

Perceba que quebramos uma função que possuía dois parâmetros<br>
em outras duas funções que recebem apenas um parâmetro cada.

<br>
<br>

> **Sabe o porquê?**

<br>
<br>

*ps: Utilizei `o porquê` junto e com acento pois nesse caso ele*<br>
*tem a função de substantivo,  sinônimo de motivo, razão, causa<br>*
*e sempre deve vir acompanhado do artigo `o`.*

<br>
<br>

E só para corroborar o que eu disse anteriormente leia essa citação:

<br>

> "Já que todas as funções esperando mais de um argumento podem<br> 
> ser transformadas em funções equivalentes recebendo uma única entrada<br> 
> (via Currying), o lambda cálculo não tem interesse em criar funções<br> 
> que aceitam mais de um argumento..."

<br>
<br>

> **Você já tinha imaginado quebrar uma função tão simples como a soma em duas?**

> Eu, como AMO a Matemática, adoro de trabalhar dessa forma.

<br>
<br>


> **Então agora vamos escrever essa mesma função usando apenas a soma!**

<br>
<br>

Para isso precisamos entender o **algoritmo** da multiplicação:

```

Receba x e y
Pegue o valor de x e some ele mesmo y vezes.


```

<br>

Traduzindo para JavaScript:

<br>


```js

const times = ( y ) => ( x ) => {

  let result = 0

  while ( y > 0 ) { // ( y )
    result += x
    y--
  }

  return result
}

console.log('3 times 4: ', times( 4 )( 3 ) ) // 3 times 4: 

```

#### Reduzindo a multiplicação para a soma

```js

const sum = ( y ) => ( x ) => x + y

const times = ( y ) => ( x ) => {

  let result = 0

  const sumX = sum( result )

  while ( y > 0 ) { // ( y )
    result += sumX( x )
    y--
  }

  return result
}

console.log('3 times 4', times( 4 )( 3 ) )

```

<br>
<br>

> **Conseguiu entender o [`while`](http://mdn.io/while)?**

<br>
<br>

Ele é uma função de *looping* assim como o [`for`]() e o [`do while`], porém<br>
é diferente de funções iteradoras como:

- [map](http://mdn.io/map);
- [filter](http://mdn.io/filter);
- [reduce](http://mdn.io/reduce);
- [forEach](http://mdn.io/forof);
- [for in](http://mdn.io/forin);
- [for of](http://mdn.io/forof);
- etc

A diferença entre esses dois tipos de funções é que as funções de<br>
*looping* não precisam de uma estrutura de dados como base para iterar.
Já as de iteração necessitam de uma estrutura iterável.





###### Oozaru

![](http://i.imgur.com/kPZOvNa.png)

Como demonstrei anterioremente, utilizamos funções anônimas, <br> 
que definimos em constantes, pois isso nos remete às Expressões Lambdas <br> 
que são a base da Programação Funcional.

> "Como os nomes de funções são uma mera conveniência, o lambda cálculo <br>  
> não tem interesse em nomear uma função."

*fonte: [O lambda cálculo - Wikipedia](https://pt.wikipedia.org/wiki/C%C3%A1lculo_lambda)*

Logo preciso também lhe mostrar do outro jeito, usando `function`.

> Por isso a `function` está na seção ***Oozaru***! Pois você pode<br>
> usar mas **EU** não lhe aconselho.



<br>

Utilizando nosso último exemplo podemos escrever assim:


```js

function sum ( y ) {
  return function  ( x ) { 
    return x + y 
  }
}

function times ( y ) {
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

```

<br>

Esse tipo de função acima é conhecida como **nomeada**, pois você<br>
definiu um nome diretamente para ela, mas nós também podemos escrever<br>
como se elas fossem funções anônimas desse jeito:

```js

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

```

<br>

> **Ficou MUITOOOO maior nosso código, né?!**

<hr>
<br>

## Exercícios

1) Demonstre, como visto nessa aula, a regra de sinais para a operação de divisão.<br>
Cobrindo os 3 casos explicados anteriormente.

2) Crie a função de dividir baseando-se no **SEU** algoritmo.
