// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
// Porém, os dois nomes devem estar em dois objetos separados. 
// Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const arr = [
    {
        name: 'João'
    }
]
const arr2 = [
    {
        name: 'Maria'
    }
]

console.log(arr != arr2);