const quinzeUso = document.getElementById('quinzeUso')
const tempoUso = document.getElementById('tempoUso')

const btn = document.getElementById('btn')

const resultado = document.getElementById('result')


btn.addEventListener('click', (e) => {
    e.preventDefault()
    
    let calculo = +quinzeUso.value * (Math.ceil(+tempoUso.value / 15))
    console.log(calculo);  
    
    console.log(quinzeUso.value);
    console.log(tempoUso.value);

    resultado.textContent = calculo
    
})