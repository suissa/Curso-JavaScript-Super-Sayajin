![Curso - JavaScript Super Saiyajin](http://i.imgur.com/jGXoRO6.png)


# Super Sayajin I

<p align="center">
  <img src="https://raw.githubusercontent.com/interaminense/Curso-JavaScript-Super-Sayajin/master/img/ss1.jpg">
</p>

## Módulo 1 - Funções e Lógica

Nesse módulo ensinarei como você irá traduzir seu conhecimento prévio, <br>
principalmente em Matemática do Ensino Médio, em JavaScript Funcional.

Esse módulo É **OBRIGATÓRIO** para quem:

- Não saiba a definição de função e/ou conjunto;
- Não sabe como compor operações matemáticas complexas usando apenas soma e números negativos;
- Não tem lógica matemática forte


### Conteúdo

#### Matemática Discreta

Vamos aprender como criar TODAS as operações mais utilizadas na Matemática<br>
e como trabalhar com o tipo `Number`, para isso inciaremos direto na função, <br>
para que o aluno entenda que esse é o conceito mais importante que ele precisa.

As primeiras funções irão utilizar os números passados por parâmetro para que ele<br>
não precise iniciar nenhuma constante que não seja a função, só depois disso que você<br>
aprenderá a trabalhar com o tipo `Number`, encapsulando e usando suas principais funções.

Depois iremos aprender a parte de coleções de números e conjuntos, onde emularemos<br>
o conceito de conjutos com `Array` e `Set`, pois o `Set` não possui NENHUMA das operações<br>
de conjuntos, como: adição, subtração e intersecção.

##### Conceitos

- Constante;
  - nada de `var` **aqui!**
- Função;
  - sempre pura!
- Números;
- Operações matemáticas:
  - soma, subtração, multiplicação, divisão, exponenciação e radiciação;
  - todas baseadas apenas na soma;
- Boolean;
- Lógica: matemática e booleana;
- Conjuntos;
- Operaçes com Conjuntos;
- Física: como inferir fórmulas baseando-se em conceitos.

##### JavaScript

- `while`/`for`;
- `Function`;
- `Number`;
- `Array`;
- `Set`.

#### Pré-requisitos

- Ensino Médio (cursando ou completo)
- Não ter medo da Matemática pq ela é uma LINDA!

#### Artigo

Sim além dos exercícios que serão passados em cada módulo ainda teremos **pelo menos** <br>
um artigo sobre algum dos temas abordados.


#### Projeto Final

Criação de uma calculadora com o máximo possível de funções matemáticas e físicas, cada aluno<br>
deverá criar pelo menos 2 funções novas.



<br>

<hr>

<br>

### Aulas

#### Aula 01

Aprendemos o conceito de função e como criar operações básicas<br>
de Matemática reusando funções criandas antereiormente.

- [Aula 01 - parte 1]()
- [Aula 01 - parte 2]()
- [Aula 01 - parte 3]()
- [Aula 01 - parte 4]()

#### Aula 02

Aplicamos os conceitos da aula passada para criarmos as operações<br>
de potenciação e radiciação da Matemática.

- [Aula 02 - parte 1](https://youtu.be/Z2HQT7b4B9E)
- [Aula 02 - parte 2](https://youtu.be/ckiriIZrFT0)
- [Aula 02 - exercício](https://youtu.be/57ajG8bpTgw)

#### Aula 03

Irei ensinar o conceito de Lógica Booleana, utilizando como exemplo<br>
as funções de validação de Números Pares e Ímpares, utilizando apenas<br>
a função para testar se o número é par em conjunto do operador [`%`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder).

Dessa forma demonstrando como aplicar em conjunto tanto a Lógica Booleana<br>
como a Lógica Matemática.

- operador de módulo/resto;
- true/false;
- if/else;
- not;
- par;
- ímpar;

```js

const ehPar = ( x ) => ( x % 2 === 0 )

```

Perceba que utilizamos da comparaçao de valor **e tipo** `===` entr o<br>
resto da divisao de x por 2, se ele for igual a `0` entao retornamos<br>
`true` se nao for igual retornamos `false`.

Isso se deve pois qualquer resultado de uma comparaçao lógica (booleans) tem como<br>
retorno um valor booleano (verdadeiro ou falso).

Entretanto se nao usarmos a comparaçao com `0` o retorno da funçao sera<br>
o próprio `0` e no JavaScript os seguintes valores sao entendidos como falso:

- `0`;
- `false`;
- `null`;
- `undefined`;
- `""`. // string vazia

Entao se quisermos eliminar a comparaçao com o `0` podemos fazer o seguinte.

Se sabemos que o retorno correto é o `0` e queremos que esse valor<br>
quando retonado se transforme em `true` basta invertermos seu valor,<br>
tendo em vista que o `0` é entendido como `false`, logo vira `true`.


```js

const ehPar = ( x ) => !( x % 2 )

```

Porém advinhe o que acontece se fizermos isso:


```js

const ehPar = ( x ) => !x % 2

```

O retorno **sempre** sera `0` pois quando negamos o valor de `x`,<br>
nao sendo o `0`, ele ira se transformar em `false`. Pois **qualquer** <br>
número que nao seja o `0` é `true`, logo é transformado em `false`.

Por isso que encapsulamos o calculo que retorna o resto em `( )` e usamos<br>
a negaçao antes dos parênteses, para que possamos inverter o valor total.

#### Aula 04

Continuando com a Lógica Booleana ensinarei a teoria e a prática da utilização<br>
da estrutura condicional [`if`](https://mdn.io/if) para criarmos uma função de<br>
validação para [Números Primos](https://pt.wikipedia.org/wiki/N%C3%BAmero_primo).

- and/or;
- let;
- for;
- Number.isInteger;

#### Aula 05

Conjuntos

- Array;
- Set;
- contém/contido;

#### Aula 06

Operações com Conjuntos

- uniao;
- subtraçao;
- intersecçao;

#### Aula 07

Um pouco mais de Matemática, dessa vez com recusão.

- fatorial
- fibonacci
- PA
- PG

#### Aula 08

Finalizando com uma pitada de Física, criando e compondo fórmulas.