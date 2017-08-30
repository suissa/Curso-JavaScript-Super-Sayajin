# Aula 2 - Utilizando nossas operações 

Nessa aula eu já começo passando um desafio para você.

*Dica: existem pelo menos 2 formas, mas 1 é a melhor.*


## Desafio

Criar a função de divisão utilizando apenas a função de soma, <br>
onde ela receba 2 valores inteiros e consiga retornar um <br>
valor decimal. Por exemplo: `5 / 2 = 2.5`

Além disso explique como dois valores do conjunto dos Números Naturais<br>
transformaram-se em um valor que não está contido nesse grupo e qual o grupo que ele pertence.

> **Lembrando que a ÚNICA função aceita dentro da divisão será a da soma!**


## Exponenciação

![Exponenciação](http://mundoeducacao.bol.uol.com.br/upload/conteudo_legenda/ba789adb96c654e9c0d7c4d9ee79496f.jpg)

Como você já deve saber a exponenciação é a função inversa da radiciação<br>
e vice-versa e as derivam da multiplicação e divisão.

Então vamos parar de enrolar e criar nossa função de exponenciação (`pow`).

```js
const pow = ( y ) => ( x ) => {

  let result = 1

  while ( y > 0 ) {
    result = result * x
    y = y - 1
  }

  return result
}
```

Agora iremos diminuir nosso código utilizando uma técnica chamada: <br>
[`Shorthand operator`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)!

```js
const pow = ( y ) => ( x ) => {

  let result = 1

  while ( y > 0 ) {
    result *= x
    y -= 1
  }

  return result
}

console.log('3 ^ 2 =', pow( 2 )( 3 ) )
console.log('3 ^ 3 =', pow( 3 )( 3 ) )
console.log('3 ^ 4 =', pow( 4 )( 3 ) )
console.log('3 ^ 5 =', pow( 5 )( 3 ) )

```

```js
const inverse = ( x ) => x * -1

const add = ( y ) => ( x ) => x + y
const subtract = ( y ) => ( x ) => add( inverse( y ) )( x )

const multiply = ( y ) => ( x ) => {

  let result = 0

  const addX = add( x )
  const decrement1 = subtract( 1 )

  while ( y > 0 ) {
    result = addX( result )
    y = decrement1( y )
  }

  return result
}
const pow = ( y ) => ( x ) => {

  let result = 1

  while ( y > 0 ) {
    result = multiply( result )( x )
    y = subtract( 1 )( y )
  }

  return result
}
```


```js
const pow = ( y ) => ( x ) =>
  Math.pow( x, y )
```

Claramente você percebeu que estamos usando a função [`Math.pow`](http://mdn.io/pow), <br>
que é nativa do JavaScript, caso queira saber mais *click* no *link* acima.

Nesse caso nossa função `pow` recebe primeiramente seu expoente `y` e depois<br>
sua base `x`


### Lembrete 1

> Percebeu que não criamos **funções** porém não criamos nenhuma constante <br>
> para os valores que passaremos como parâmetro?

Isso se deve graças a dois conceitos que são obrigatórios para uma linguagem <br> estar contida no Paradigma Funcional:

- [First-class Function]()
- [High-Order Function]()

**Falarei melhor sobre esses conceitos na próxima aula!**

## Exercício

Como você aprendeu muito bem com usar a potenciação vamos usá-la em um <br>
problema **muito** conhecido da Matemática.

Quero que você crie uma função para resolver o [Teorema de Pitágoras](https://pt.wikipedia.org/wiki/Teorema_de_Pit%C3%A1goras):

> "Em qualquer triângulo retângulo, o quadrado do comprimento da hipotenusa<br> 
é igual à soma dos quadrados dos comprimentos dos catetos."

*fonte: [https://pt.wikipedia.org/wiki/Teorema_de_Pit%C3%A1goras](https://pt.wikipedia.org/wiki/Teorema_de_Pit%C3%A1goras)*

![](http://www.infoescola.com/wp-content/uploads/2007/02/teorema-de-pitagoras1-450x253.jpg)

Para lhe ajudar já iniciarei o código para você:

```js
const teoremaDePitagoras = ( b, c ) => {
  
}
```

Então perceba que a função `teoremaDePitagoras` recebe **2** parâmetros,<br>
entretanto dentro dessa função você deve usar apenas as funções que<br>
já criamos anteriormente.

*Boa sorte!*
