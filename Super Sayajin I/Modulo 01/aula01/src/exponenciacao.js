const pow = ( y ) => ( x ) =>
  Math.pow( x, y )

module.exports = pow

// const pow = ( x, y ) => Math.pow( x, y )

// const elevadoAoQuadrado = pow( 2 )
// const elevadoAoCúbo = pow( 3 )
// const elevadoÀDécima = pow( 10 )

// const num2 = 4
// const num3 = 3
// const num10 = 2

// console.log( `\n ${num2} AO QUADRADO é :`, elevadoAoQuadrado( num2 ) )
// console.log( `\n ${num3} AO CUBO é :`, elevadoAoCúbo( num3 ) )
// console.log( `\n ${num10} À DÉCIMA POTÊNCIA é :`, elevadoÀDécima( num10 ) )

/**

Perceba que as palavras `elevadoÀDécima` possui crase! 

Podemos facilmente entender essa regra de Português pois antes
temos as seguintes palavras: `elevadoAoQuadrado` e `elevadoAoCúbo`;

Notou que `AoCubo` e `AoQuadrado` possuem a junção de dois artigos??

Sim! Primeiramente o artigo `a`, pois ele vem da conjungação do verbo
`elevar`, porque quando você eleva, você eleva ALGO.

Logo você diz: Vou elevar 3 a alguma potência.

Então se a sequência dessa oração é um substantivo masculino, ele
deve ser precedido do artigo `o`, por isso temos: `Ao`.

No entanto, se o substantivo for FEMININO, trocamos o artigo `o` pelo
artigo `a`, com isso teremos a junção de 2 artigos `a`.

E na língua portuguesa isso denota o uso da crase, logo fica: `Á`

Simples né??

*/