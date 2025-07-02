// Elaborar um programa para uma loja, o qual leia o preço de um produto
// e informe as opções de pagamento da loja. Calcule e informe o valor para
// pagamento à vista com 10% de desconto e o valor em 3x.

let infoProduto = prompt('qual o produto?')
let valorProduto = Number(prompt('Quanto custa o produto?'))

let desconto = valorProduto * 0.10

let tresVezes = valorProduto / 3

alert(`O produto ${infoProduto} custa R$ ${valorProduto}. 
    A vista com 10% fica ${valorProduto - desconto} ou 3x de ${tresVezes}`)
