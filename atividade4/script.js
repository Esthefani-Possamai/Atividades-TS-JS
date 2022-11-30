let idade = window.prompt ('Informe sua idade: ')
Number.parseInt(idade)
var metade = idade/2
console.log(metade)

let resp = window.document.getElementById('resp')

if (idade >= 18){
    resp.innerHTML = 'você é maior de idade!'
}
else {
    resp.innerHTML = 'você é menor de idade!'
}