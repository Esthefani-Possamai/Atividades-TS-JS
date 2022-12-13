var listaSeries = [
    ['Inuyasha', 167, 20],
    ['Naruto', 220, 20],
    ['Sword Art', 25, 25],
    ['Game of Thrones', 73, 50],
    ['The Mandalorian', 16, 45],
]
var nome = window.prompt('Informe o nome da série que você está vendo:');
var quant = window.prompt('Informe a quantidade de episódios já vistos:');
var printar = document.getElementById('result');
Number.parseInt(quant)

for (let i=0; i<5; i++){
    
    if (nome === listaSeries[i][0]){
        let cont = listaSeries[i][1] - quant;
        let resulta = cont * listaSeries[i][2]
        Number.parseInt(resulta)
        printar.innerHTML= `Você precisa de ${resulta} minutos para terminar de assistir a série ${nome}.`
    }
};