const produto = document.getElementById('produto')
const preco = document.getElementById('preco')

const btn = document.getElementById('btn')

const spanProduto = document.getElementById('span-produto')
const spanTotal = document.getElementById('span-valorTotal')
const spanTerceiroProduto = document.getElementById('terceiroProduto')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const valorProdutoDesconto = +(preco.value) / 2
    const valorCompra = valorProdutoDesconto + (+preco.value * 2)

    console.log(preco.value);
    console.log(produto.value);

    spanProduto.textContent = produto.value;
    spanTotal.textContent = valorCompra;
    spanTerceiroProduto.textContent = valorProdutoDesconto;
    
})