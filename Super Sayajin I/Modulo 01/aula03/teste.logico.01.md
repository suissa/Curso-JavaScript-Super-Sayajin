#Teste lógico:

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

Então vamos montar nosso exemplo com ele:


```js

const hasMoney = () => true
const isWeekend = () => true
const isRaining = () => !true // false

const amIGoingToTheMovies = () => {
  if ( hasMoney() && isWeekend() && !isRaining() ) {
    console.log('Eu vou ao cinema!')
  } else {
    console.log('Eu NÃO vou ao cinema!')
  }
}

amIGoingToTheMovies() // Eu vou ao cinema!

```

Perceba que o valor de `isRaining` é `false` por isso utilizamos `!isRaining()`. Porém<br>
o mais correto, já que está chovendo, é que essa função retorne `true`.
Com isso entramos em um caso onde queremos que o valor "verdadeiro", para entrar no `if`,<br>
seja `false`.

> Mas como? Se o `if` só entra com valores verdadeiros?

**Ótima pergunta!**

Então pense comigo:

Se estiver chovendo ele retorna verdadeiro, mas quero testar quando não está chovendo.<br>


```js

const hasMoney = () => true
const isWeekend = () => true
const isRaining = () => true 

const amIGoingToTheMovies = () => {
  if ( hasMoney() && isWeekend() && !isRaining() ) {
    console.log('Eu vou ao cinema!')
  } else {
    console.log('Eu NÃO vou ao cinema!')
  }
}

amIGoingToTheMovies() // Eu NÃO vou ao cinema!

```

Esse código acima não funciona pois o valor de `!isRaining` que estamos testando no `if`<br>
é `false`, para "corrigirmos" isso basta usarmos a dupla negação:

```js

const hasMoney = () => true
const isWeekend = () => true
const isRaining = () => true 

const amIGoingToTheMovies = () => {
  if ( hasMoney() && isWeekend() && !!isRaining() ) {
    console.log('Eu vou ao cinema!')
  } else {
    console.log('Eu NÃO vou ao cinema!')
  }
}

amIGoingToTheMovies() // Eu vou ao cinema!

```

Porém, semanticamente, parece um pouco ilógico negar duplamente se está chovendo.
O que podemos fazer para deixar nosso código mais legível é criar outra função para<br>
encapsular esse comportamento baseado na função `isRaining`.

```js

const hasMoney = () => true
const isWeekend = () => true
const isRaining = () => false 
const isNotRaining = () => !isRaining() 

const amIGoingToTheMovies = () => {
  if ( hasMoney() && isWeekend() && isNotRaining() ) {
    console.log('Eu vou ao cinema!')
  } else {
    console.log('Eu NÃO vou ao cinema!')
  }
}

amIGoingToTheMovies() // Eu vou ao cinema!

```

Vamos modificar um pouco só nosso exemplo para usarmos o OU lógico.


Teste lógico:

- Vou ao cinema?

Premissas:

- Para ir ao cinema preciso ter dinheiro OU 
- ser final de semana E 
- precisa NÃO estar chovendo.


```js

const hasMoney = () => true
const isWeekend = () => false
const isRaining = () => false 
const isNotRaining = () => !isRaining() 

const amIGoingToTheMovies = () => {
  if ( hasMoney() || isWeekend() && isNotRaining() ) {
    console.log('Eu vou ao cinema!')
  } else {
    console.log('Eu NÃO vou ao cinema!')
  }
}

amIGoingToTheMovies() // Eu vou ao cinema!

```


```js

const hasMoney = () => true
const isWeekend = () => false
const isRaining = () => false 
const isNotRaining = () => !isRaining() 

const amIGoingToTheMovies = () => {
  if ( ( hasMoney() || isWeekend() ) && isNotRaining() ) {
    console.log('Eu vou ao cinema!')
  } else {
    console.log('Eu NÃO vou ao cinema!')
  }
}

amIGoingToTheMovies() // Eu vou ao cinema!

```
