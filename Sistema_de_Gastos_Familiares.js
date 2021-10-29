/* ### Sistema de gastos familiar 

  Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
      * receitas: [] 
      * despesas: []
  Agora, crie uma função que irá calcular o total de receitas e 
  despesas e irá mostrar uma mensagem se a família está com 
  saldo positivo ou negativo, seguido do valor do saldo.
*/

// Criando o objeto
let family = {
  incomes: [1200, 3200, 250.43, 300],
  expanses: [320.34, 50128.45, 176.87, 1450, 2000]
}

// Função que calcula o total de receitas e imprime o resultado no console.
function sum(array) {
  let total = 0
  for (let value of array) {
    total += value
  }

  return total
}

function calculateBalance() {
  const calculateIcomes = sum(family.incomes)
  const calculateExpanses = sum(family.expanses)

  const total = calculateIcomes - calculateExpanses
  const istOk = total >= 0

  let balanceText = 'Negativo'

  if (istOk) {
    balanceText = 'Positivo'
  }

  console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()
