// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs.: Criar dois produtos: passando dois e três params

class Produto {
    constructor (public nome: string, public preco: number, public desconto: number = 0){}
}

const Produto1 = new Produto ('Banana', 23)
const Produto2 = new Produto ('Banana', 23, 0.3)

console.log (Produto1)
console.log (Produto2)
