// // Exerc団io 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
 
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
 
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
 
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)
 
// // Exerc団io 2 - Heran溝
// var objeto2D = {
//     base: 0,
//     altura: 0
// }
 
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }
// console.log(retangulo.area())
 
// // Exerc団io 3 - Getters & Setters
// var estagiario = {
//     _primeiroNome: ''
// }
 
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
 
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)

// Exercício 1 - Classe

class Moto {

    constructor (public moto: string, public velocidade:number = 0){
    }
    public buzinar() : void {
        console.log('Toooooooooot!')
    }

    public acelerar(delta: number): void {
        this.velocidade = this.velocidade + delta
    }
}

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exerc団io 2 - Herança

class objeto2D {
    constructor (public base: number = 0, public altura: number = 0){
    }

    public area():number {
        return this.base * this.altura
    }
}

class retangulos extends objeto2D {
}

const areaRetangulo = new retangulos (5,7)
console.log (`Área de ${areaRetangulo.area()}m²!`)

 
// Exerc団io 3 - Getters & Setters

class Estagiaria {
    private _primeiroNome: string = ''

    get primeiroNome(): string {
        return this._primeiroNome
    }

    set primeiroNome(nome: string) {
        if (nome.length >= 3) {
            this._primeiroNome = nome
        } 
    }
}

const testar = new Estagiaria
console.log (testar.primeiroNome)

testar.primeiroNome = 'Esthéfani'
console.log (testar.primeiroNome)

testar.primeiroNome = 'Es'
console.log (testar.primeiroNome)

testar.primeiroNome = 'Est'
console.log (testar.primeiroNome)