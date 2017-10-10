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

## Exemplo

Teste lógico:

- Vou ao cinema?

Premissas:

- Para ir ao cinema preciso ter dinheiro.
- Para ir ao cinema precisa ser final de semana.
- Para não ir ao cinema precisa estar chovendo.

Analise 

Vou ao cinema? SIM.

<hr>

Preciso ter dinheiro E
Precisa ser final de semana E
Precisa não estar chovendo

<hr>

Preciso ter dinheiro E
Precisa ser final de semana E
NÃO Precisa estar chovendo


Agora vamos passar as premisas para código:


```js

const hasMoney = () => true
const isWeekend = () => true
const isRaining = () => false

```

Para, quase, todo teste lógico que fizermos iremos encapsular em uma função.

Agora para testarmos essas premisas iremos utilizar **o condicional [if](https://mdn.io/if)**,<br>
pois ele **é o responsável por validar seu teste lógico e executar seu bloco APENAS quando**<br>
**o resultado do seu teste der VERDADEIRO**!



Imagine comigo o Conjunto dos Números Naturais, sem o zero( N*), e queremos filtrar ele em dois sub-conjuntos: dos Números Pares e Ímpares.
Esse com certeza é um dos testes lógicos mais simples que existem.
Vamos ao conceito desses números:
Um número inteiro qualquer é dito par se, ao ser dividido pelo número dois, resulta em um número inteiro, caso contrário esse número é dito ímpar.
fonte: https://pt.wikipedia.org/wiki/N%C3%BAmeros_pares_e_%C3%ADmpares
Divisibilidade
Nesse momento você precisa lembrar o que significa um número ser dividido por outro, então aqui vai:
Um número é divisível por outro quando o resto da divisão entre os dois é igual a zero.
fonte: https://matematicabasica.net/criterios-de-divisibilidade/
Resto da divisão
Olha só como recebemos o resto de uma divisão no JavaScript:
Operador: var1 % var2
fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
Testando se é Par
Juntando o conteúdo acima podemos facilmente criar a seguinte função:

Testando se é Ímpar
Logicamente podemos negar a comparação com o resto e fazer o teste assim:

Mas espere um pouco! Relembre comigo a definição do Ímpar:
…é dito par se, ao ser dividido pelo número dois, resulta em um número inteiro, caso contrário esse número é dito ímpar.
Negação
Se levarmos isso para Programação Funcional precisamos reaproveitar o máximo possível nossas funções, seguindo esse pensamento vamos transformar a função ehÍmpar no contrário da função ehPar .
Para isso utilizamos o operador ! que denota a negação lógica, dessa forma:

Entretanto podemos utilizar a negação em mais uma parte desse código.
Vamos relembrar quais são os valores que o JavaScript entende como falso?

Entendeu como eu testei os valores???
Para que a mensagem falso fosse mostrada o valor precisa ser falso pois com isso eu nego ele com ! e com isso ele entra no if .
Com isso vimos que o valor 0 é entendido como falso, podemos então pensar o seguinte:
preciso retornar verdadeiro se for Par;
qualquer número par terá resto 0 quando dividido por 2;
posso pegar o resto e negar ele para virar verdadeiro;
e retornar.
Colocando isso em JavaScript:

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