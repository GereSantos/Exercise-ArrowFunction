// Funnção(ArrowFunction) que retorna os dados preenchido do usuário
let name = window.prompt('Digite seu nome ')
let idade = window.prompt('Digite sua idade ')

let cidade = window.prompt('Digite sua a Cidade ')

let functionName = (name,idade, cidade) => 'Seu nome é ' + name + ', você tem ' + idade + ' anos de idade. Sua cidade é em ' + cidade ;

alert(functionName(name,idade, cidade));