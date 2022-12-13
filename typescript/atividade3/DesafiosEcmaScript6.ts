// Desafios

// Exercicio 1
const dobro = (valor: number): number => valor * 2
console.log(dobro(10))


// Exercicio 2
//quando coloco o = quer dizer que é o valor padrão (default) quando nenhum valor for informado/atribuído a variável nome
let dizerOla = function (nome: string = 'Pessoa'): void {
    console.log(`Olá, ${nome}`)
}
dizerOla()
dizerOla('Anna')

// Exercicio 3
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// Exercicio 4
const array = [55, 20]
const arrays: number[] = [...array] 
console.log(arrays)

// Exercicio 5
const notas = [8.5, 6.3, 9.4]
for (let i=0; i<3; i++) {
console.log(`${notas[i]}`)
}

// Exercicio 6
const cientista = { primeiroNome: 'Will', expeciencia: 12 }
const { primeiroNome: no, expeciencia: ex } = cientista
console.log(`Nome: ${no} \ Experiência: ${ex}`)