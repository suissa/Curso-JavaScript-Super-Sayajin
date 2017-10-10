# Aula 2 - Utilizando nossas operações 

Nessa aula eu já começo passando um desafio para você.

*Dica: existem pelo menos 2 formas, mas 1 é a melhor.*


## Desafio

Criar uma função, composta por outras menores, que calcule a fórmula de Bhaskara.<br> Entretando quero que você resolva manualmente a primeira vez e depois transcreva<br>
seus passos em funções.

![](https://i.imgur.com/x7besae.png)


## Lógica Booleana


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

- ou: \/ ou || (no JavaScript)
- e: /\ ou && (no JavaScript)


É exatamente com essas bases acima que criamos, quase, qualquer programa.

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

**Essa é a tabela verdade para o E e ou OU lógicos!**

> Analisando ela, o que você pode inferir???

Para fazermos essa análise vamos pensar o seguinte:

Precisamos identificar as discrepâncias entre um e outro, pois já sabemos que<br>
nos dois casos quando comparamos doi valores iguais o retorno é o mesmo valor.

Com isso podemos identificar o seguinte:

```

0 E 1 =  0
1 E 0 =  0

------------------------------------

0 OU 1 =  1
1 OU 0 =  1

```

No caso do `E` podemos inferir que se ele for utilizado em conjunto de uma premissa<br>
falsa (`0`) seu retorno SEMPRE será `0`.

No caso do `OU` podemos inferir que se ele for utilizado em conjunto de uma premissa<br>
verdadeira (`1`) seu retorno SEMPRE será `1`.

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

> Um número inteiro qualquer é dito par se, ao ser dividido pelo número dois, 
> resulta em um número inteiro, caso contrário esse número é dito ímpar.

*fonte: https://pt.wikipedia.org/wiki/N%C3%BAmeros_pares_e_%C3%ADmpares*

### Divisibilidade

Nesse momento você precisa lembrar o que significa um número ser dividido por outro, então aqui vai:

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

> …é dito par se, ao ser dividido pelo número dois, resulta em um número inteiro, 
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
```

É! Deu merda, sabe por quê?
Lembra que na Matemática temos que utilizar parênteses para informar a precedência das operações?
Precisamos utilizar esse mesmo conceito aqui para solucionar esse problema.
Quando utilizamos apenas !x % 2 isso diz para o JavaScript negar o valor de x , ou seja, qualquer número maior que 0 resultará em 0/false .

Funcionalizando
Com tudo isso que foi demonstrado anteriormente podemos chegar na seguinte solução, seguindo os conceitos do Paradigma Funcional:

Com isso conseguimos separar nossa lógica em funções atômicas e que podem ser facilmente reaproveitadas!
O que você achou dessa solução?
ps: escrevi em Português apenas para exemplificar.
Traduzindo o código para Inglês
Se eu falei que fiz em Português apenas para exemplificar aqui vai o mesmo código como eu faria normalmente:

Utilizando nossas funções
Você achou que era só isso?
Vou demonstrar para você como usar essas mesmas funções para filtrar os números de um Array:

Refatorando
Me lembraram uma coisa MUITO importante em cima desse código.

Podemos melhorá-lo da removendo nossa isDivisibleBy2 dessa forma:

Sempre quis escrever um conteúdo de Lógica básica juntando uma pitada de Programação Funcional, caso você curta traduzir seus conhecimentos de Matemática básica para JavaScript eu iniciei um curso que serão dois módulos apenas com Matemática!