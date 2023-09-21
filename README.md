# Capítulo 2:  Iniciando a API
Aqui aprenderemos a criar aplicações utilizando Typescript seguindo padrões de código e princípios do SOLID. Aorenderemos conceitos importantes como casos de uso, repositórios, models. streams do Node JS e documentação de APIs com Swagger.

## Typescript
- Uma linguagem open-source da Microsoft 
- Superset do Javascript
- Tipagem estática 
 
```js
class User { 
    name: string; 
    username: string; 
    document: string; 
}

const user: User = {
    name: "Dani",  
    username: "dani", 
    document: "333333"
}
```


```js
function soma(num1: number, num2: number){ 
    return num1 + num2;
}

console.log(soma(1,2)) // correto 
console.log(soma("1", "2"))  // errado 
console.log(soma(1)) // incorreto 
```

## Instalações
`yarn add -y`

`yarn add express`

`yarn add @types/express -D`

`yarn add typescript -D`

`yarn tsc --init`

`yarn tsc`

`node dist/server.js`

` "outDir": "./dist", `
