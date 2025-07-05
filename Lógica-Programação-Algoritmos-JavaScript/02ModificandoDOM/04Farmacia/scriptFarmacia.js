const medicamento = document.getElementById('nome-medicamento')
const preco = document.getElementById('preco')
const btn = document.getElementById('btn')

const resultadoNome = document.getElementById('resultado-nome')
const resultadoPromo = document.getElementById('resultado-promocao')

let promo = +(preco.value)

btn.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log(preco.value);
    // console.log(medicamento.value);
    
    resultadoNome.textContent = medicamento.value
    console.log(promo);
    resultadoPromo.textContent = Math.floor(promo)
})
