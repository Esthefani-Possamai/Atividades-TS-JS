var minhaLista = [
    'Esthéfani',
    'Luis',
    'Giulia',
    'Gabriel',
    'Rosemery'
]

var pri = document.getElementById('primeiro')
var seg = document.getElementById('segundo')
var ter = document.getElementById('terceiro')
var qua = document.getElementById('quarto')
var qui = document.getElementById('quinto') 

var varia = [
    pri,
    seg,
    ter,
    qua,
    qui
]

function mudar () 
{
    for (let i=0; i<5; i++){
        varia[i].innerHTML = ` ${ minhaLista[i] }` 
    }    
}
mudar()