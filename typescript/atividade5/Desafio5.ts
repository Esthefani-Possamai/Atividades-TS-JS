
class Products {
    constructor (public nome: string, public preco: number, public desconto: number = 0){
    }

    public precoComDesconto (): number { 
        return this.preco - (this.desconto*10)
    }

    public resumo(): string {
        return `${this.nome}, que custava R$${this.preco}, custa agora R$${this.precoComDesconto()}, devido ao desconto de R$${this.desconto * 10} reais (${this.desconto * 100}% off).`
    }
}

const Product = new Products ('Banana', 10, 0.9)
console.log (Product.resumo())
