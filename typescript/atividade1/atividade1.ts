
//Criar um objeto funcionário com: array de strings com os nomes dos supervisores;
//função de bater ponto que recebe a hora(número) e retorna uma string
//- ponto normal (<=8)
//- fora do normal (>8)

type Funcionarios = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionarios = {
    supervisores: ['Esthéfani', 'Luis'],
    baterPonto(horario: number): string {
        if (horario <= 8){
            return 'Ponto normal'
        }
        else {
            return 'Fora do horário'
        }
    }
}
console.log(funcionario.baterPonto(60))
console.log(funcionario.supervisores)
