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

Sim além dos exercícios que serão passados em cada aula ainda teremos **pelo menos** <br>
um artigo sobre algum dos temas abordados.


#### Projeto Final

Criação de uma calculadora com o máximo possível de funções matemáticas e físicas, cada aluno<br>
deverá criar pelo menos 2 funções novas.



<br>

<hr>

<br>

### Aulas

#### Aula 01 - Conhecendo funções anônimas

##### O que é uma função?

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



##### Entendendo as operações matemáticas básicas

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

> Na lógica matemática e na ciência da computação, lambda cálculo , também escrito como cálculo-λ é um sistema formal que estuda funções recursivas computáveis, no que se refere a teoria da computabilidade, e fenômenos relacionados, como variáveis ligadas e substituição. Sua principal característica são as entidades que podem ser utilizadas como argumentos e retornadas como valores de outras funções.
> 
> A parte relevante de lambda cálculo para computação ficou conhecida como lambda cálculo não-tipado. O lambda cálculo tipado e o não-tipado tem suas ideias aplicadas nos campos da lógica, teoria da recursão (computabilidade) e linguística, e tem tido um grande papel no desenvolvimento da teoria de linguagens de programação (com a versão não-tipada sendo a inspiração original para programação funcional, em particular Lisp...
> 
> ...
> 
> Como os nomes de funções são uma mera conveniência, o lambda cálculo não tem interesse em nomear uma função. Já que todas as funções esperando mais de um argumento podem ser transformadas em funções equivalentes recebendo uma única entrada (via Currying), o lambda cálculo não tem interesse em criar funções que aceitam mais de um argumento. 

*fonte: [Cálculo lambda - Wikipedia](https://pt.wikipedia.org/wiki/C%C3%A1lculo_lambda)*

<br>

> **Entendeu  o porquê estou mostrando como criar essas operações<br>
básicas onde recebo apenas um parâmetro por vez?**

<br>

Caso você ainda não tenha entendido irei demonstrar praticamente.

Imagine que você quer ter uma função que sempre multiple por `2` algum valor.

```js

const double = ( x ) => x * 2

```

> Muito fácil né?
> 
> Agora vamos fazer uma que multiplique por 3 e outra por 10.

```js

const double = ( x ) => x * 2
const triple = ( x ) => x * 3
const tenTimes = ( x ) => x * 10

```

Podemos facilmente criar uma função para reaproveitar isso, dessa forma:


```js

const times = ( y ) => ( x ) => x * y
const double = times( 2 )
const triple = times( 3 )
const tenTimes = times( 10 )

```


##### Desafio

Criar a função de divisão utilizando apenas a função de soma, <br>
onde ela receba 2 valores inteiros e consiga retornar um <br>
valor decimal. Por exemplo: `5 / 2 = 2.5`

Além disso explique como dois valores do conjunto dos Números Naturais<br>
transformou-se em um valor que não está contido nesse grupo e qual o grupo que ele pertence.

> **Lembrando que a ÚNICA função aceita dentro da divisão será a da soma!**




###### Oozaru

![](http://i.imgur.com/kPZOvNa.png)

Como demonstrei anterioremente, utilizamos funções<br>
anônimas, que definimos em constantes, pois isso nos remetei ao [Cálculo lambda](https://pt.wikipedia.org/wiki/C%C3%A1lculo_lambda) que é a base da <br>
Programação Funcional.

Logo preciso também lhe mostrar do outro jeito, usando `function`.

> Por isso a `function` está na seção ***Oozaru***! Pois você pode<br>
> usar mas **EU** não lhe aconselho.
> 


<br>
<hr>
<br>

#### Aula 02 - Trabalhando com o tipo *Number*

#####Entendendo as operações matemáticas não tão básicas

- divisão 
    - de inteiros resultando decimal
- exponenciação
  + soma
  + subtração
  + multiplicação
  + divisão  
  + invertendo essa operação
- radiciação
    + como criar uma função genérica utilizando `Math.pow`
    + invertendo essa operação

<br>
<hr>
<br>

#### Aula 03 - Entendendo as operações matemáticas não tão básicas

- equação do primeiro grau 
- equação do segundo grau
- bhaskara


<br>
<hr>
<br>


#### Aula 04 - Mas isso é Lógico!

> Se você algum dia já falou essa frase: isso é lógico!
> 
> Sabe perfeitamente que falou isso porque aquilo esatava na sua cara!
> Não tinha como pensar de forma diferente.
> 

<br>

Então eu venho lhe falar que a Lógica é a disciplina que nos ensina<br>
a ponderar as premissas lógicas que precisamos avaliar para podermos<br>
ter um resultado final único.

Por exemplo:

<br>

> Se eu tiver dinheiro E estiver passando Logan, então irei ver.

<br>

Nisso eu lhe pergunto:

<br>

>Se estiver passando Logan e eu não tiver dinheiro, o que acontecerá?


<br>

> **Exatamente! Eu não poderei ver o filme do Logan**
> 
> Por quê?



