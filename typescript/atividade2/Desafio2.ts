//DESAFIO - JS para TS

// let contaBancaria = {
//     saldo: 3456,
//     depositar(valor) {
//         this.saldo += valor
//     }
// }
 
// let correntista = {
//     nome: 'Ana Silva',
//     contaBancaria: contaBancaria,
//     contatos: ['34567890', '98765432']
// }
 
// correntista.contaBancaria.depositar(3000)
// console.log(correntista)

//Resolução

type Banco = {
    saldo:number,
    depositar: (valor:number) => void
}

type Corrente = {
    nome:string,
    contaBancaria: Banco,
    contatos: string[]
}

let contaBancaria: Banco = 
{
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}
 
let correntista: Corrente = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)
