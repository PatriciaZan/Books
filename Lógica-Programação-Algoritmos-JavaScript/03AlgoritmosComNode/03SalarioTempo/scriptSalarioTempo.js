const prompt = require("prompt-sync")() 

const salario = Number(prompt('Qual o seu salário? R$ '))
const tempo = Number(prompt('A quanto tempo trabalha na empresa (anos) : '))


const quadrienios =  Math.floor(tempo) / 4


const acrescimo = salario * quadrienios /100

console.log(`Você tem direito a ${quadrienios}% de aumento 
            sobre o seu salario de R$${salario}
            com acrescimo de R$${acrescimo}
            `);
