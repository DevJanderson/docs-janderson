# Tipos de dados

## O que são tipos de dados?

- É a forma de **classificar um dado**;
- Temos como dados: "Janderson", 38, true, [];
- **O tipos de dados mais comuns são**:
    - Number;
    - String;
    - Empty values (null, undefined);
    - Object;

## Tipo Number
Number:
- **Number** é o tipo de dado para valores numéricos;
- Em JS **todos os números são considerados Number**;
- Sejam eles: inteiros, ponto flutuantes ou negativos;
- Exemplos: 10, 52.5, -12;
- Nota que linguagens de programção as casas decimais são após o caractere ponto(15.8);
- Em JS o operador **typeof** exibe o tipo de dado;

```javascript
// 01-Number
console.log(typeof 2)
console.log(typeof 5.14)
console.log(typeof -32)
```

## Aritimética com Numbers
- Podemos realizar **operações aritiméticas na programação;
- Operadores como: +, -, *, /, podem ser utilizados;
- Exemplo: `console.log(2+5)`;
- A **ordem matemática** também é respeitada na programação,exemplo: `console.log(5+(4*12))`;

 ```javascript
 // 02 - Operações aritiméticas
 console.log(2 + 2 )//soma
 console.log(2 - 2 )//subtração
 console.log(2 * 2 )//multiplicação
 console.log(2 / 2 )//divisão

 console.log(5+(4 * 2)) //ondem matemática

 ```

## Tipo Special Numbers
- **Special Numbers** são dados considerados como números, mas não funcionam como eles;
- São eles:
    - Infinity;
    - -Infinity;
    - NaN(Not a Number);
- Algumas operações podem resultar nestes valores;

```javascript
//03 - Special numbers
console.log(typeof Infinity) //number
console.log(typeof Infinity) //number

console.log( 12 * "asdf") //NaN
console.log(typeof NaN) //number

```

## Tipo Strings

- Strings são textos;
- Em JS temos **três formas** de criar dados de texto;
- Aspa **simples**, aspa **dupla** e **crases**;
- Desta maneira: `console.log("teste")`;
- **O "efeito final" é o mesmo, mas cada um destes recursos tem particularidades;

```javascript
// 04 - Strings
console.log('Aspa simples')
console.log("Aspa dupla")
console.log(`crase`)

console.log( typeof 'Aspa simples')

```

## Caracteres especiais
Mais detalhes sobre strings

- Uma string deve sempre **começar e terminar com o mesmo caractere** (", ', `);
- Há algumas **combinações de caracteres** que tem efeitos interessantes nas strings;
- Por exemplos **\n**, ele pula uma linha no texto;
- Por exemplos **\t**, ele cria um espaço de tab no texto;
- Vejamos eum exemplo: `console.log("Texto em \n duas linhas")`;
- Vejamos eum exemplo: `console.log("Texto em \t com tab linhas")`;

## Concatenção

- **Concatenção** é o recurso que une dois ou mais textos;
- O operador de concatenação é o **+**;
- Exemplo: `"Meu" + "texto" + "concatenado"`;
- Agora o recurso pode não fazer tanto sentido, mais com variáveis teremos um melhoor uso para ele;

```javascript
// 06 - concatenação
console.log("Oi" + "tudo" + "bem?")
```

## Interpolação (Template strings)

- A **interpolação** é um recurso semelhante a concatenação;
- Nos possibilita a escrever tudo na mesma string;
- Deve ser escrita **`entre crases`**;
- Podemos executar código JS com **${algum código}**;

```javascript
// 07 - interpolação
console.log(`A soma de 2 + 2 é: ${2 + 2}`)

```

## Booleans

- Os booleans possuem apenas **dois valores**: true ou false;
- Qualquer comparação, utilizando os sinais de **>, <, ==** resulta em um booleano;
- Mais a frente veremos que este tipo é importante para **estruturas de condição e repetição**;

```javascript
// 08 booleans
console.log(5 > 10) //false
console.log(5 < 10) //true

console.log(typeof false) // boolean
console.log(typeof true) // boolean

```

## Comparações

- As comparações que podemos utilizar são:
- **Maior e menor:** > e <;
- **Maior ou igual e menor ou igual:** >= e <=;
- **Igual:** ==;
- **Diferente:** != ;
- **Idêntico:** ===;

```javascript
// 09 - comparação
console.log(5 <= 5) //true
console.log(5 < 5) //false
console.log(10 == 10) //true
console.log(10 == 9) //false

console.log(10 != 9) //true
```

## Comparações de idêntico

- Os operadores **===** e **!==** funcionam como == e !=;
- Porém também levam em consideração **o tipo do dado**;
- Estes operadores necessitam que o tipo e o dados sejam iguais/diferetnes;
- Devemos tentar ao máximo utilizar estes operadores;

```javascript
// 10 - Comparações de igualdade e identidade

// Comparação de igualdade (==) compara apenas os valores,
// permitindo conversão de tipos.
console.log(9 == "9") // true (os valores são iguais,
// apesar dos tipos serem diferentes)

// Comparação de identidade (===) compara valores e tipos,
// não permitindo conversão de tipos.
console.log(9 === "9") // false (os valores são iguais, mas os tipos são diferentes: número e string)

// Comparação de diferença (!=) compara apenas os valores
//, permitindo conversão de tipos.
console.log(9 != "9") // false (os valores são iguais, então a comparação retorna false)

// Comparação de diferença de identidade (!==) compara valores
// e tipos, não permitindo conversão de tipos.
console.log(9 !== "9") // true (os valores são iguais,
// mas os tipos são diferentes, então a comparação retorna true)

```