// Elaborar um programa para uma pizzaria, o qual leia o valor total de
// uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser
// pago por cliente. 


let valorConta = Number(prompt('O valor total é?'))
let numeroClientes = Number(prompt('O número de clientes?'))

let valorCliente = valorConta / numeroClientes

alert(`Preço R$: ${valorConta}`)
alert(`Número de clientes: ${numeroClientes}`)
alert(`Valor por cliente R$: ${valorCliente}`)
