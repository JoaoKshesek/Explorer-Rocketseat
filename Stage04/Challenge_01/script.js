const num1 = Number(prompt("Digite o primeiro número:"))
const num2 = Number(prompt("Digite o segundo número:"))

let sum = num1 + num2
let subtraction = num1 - num2
let multiplication = num1 * num2
let division = (num1 / num2).toFixed(1)
let remainder = num1 % num2
let sumIsEven = sum % 2
let areSame = num1 === num2

alert(`O resultado da soma ${num1} + ${num2} é: ${sum}`)
alert(`O resultado da subtração ${num1} - ${num2} é: ${subtraction}`)
alert(`O resultado da multiplicação ${num1} * ${num2} é: ${multiplication}`)
alert(`O resultado da divisão ${num1} / ${num2} é: ${division}`)
alert(`O resultado do resto da divisão ${num1} / ${num2} é: ${remainder}`)

if(sumIsEven == 0){
	alert(`O resultado da soma ${num1} + ${num2} é par.`)
}else{
	alert(`O resultado da soma ${num1} + ${num2} é impar.`)
}

if(areSame){
	alert(`Os números ${num1} e ${num2} são iguais.`)
}else{
	alert(`Os números ${num1} e ${num2} são diferentes.`)
}

