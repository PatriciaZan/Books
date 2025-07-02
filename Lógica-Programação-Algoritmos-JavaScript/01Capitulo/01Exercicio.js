// Elaborar um programa que leia um número. Calcule e informe os seus
// vizinhos, ou seja, o número anterior e posterior 

let numero = Number(prompt("Digite um número:"))

let vizinhoAnterior = numero - 1
let vizinhoPosterior = numero + 1

alert(`${vizinhoAnterior} - ${numero} - ${vizinhoPosterior}`)
