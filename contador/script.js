function contar(){
    let ini = document.getElementById ('txti')
    let fim = document.getElementById ('txtf')
    let passo = document.getElementById ('txtp')
    let res = document.getElementById ('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
       res.innerHTML = "Não é possível fazer a contagem, pois faltam dados!"
    }
    else{
        res.innerHTML = 'Contando: ' //substitui o que tinha no html - innerHTML

        let i = Number(ini.value) //converter o que for pego no input para valores numéricos a serem manipulados
        let f = Number (fim.value)
        let p =  Number(passo.value)

        if (p <= 0){
            res.innerHTML = 'Como você digitou uma valor inválido para o passo, considera-se o passo como sendo 1! <br><br>Contando:'
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c}...`
            }
        }
        else {
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c}...`
            }
        }
        res.innerHTML += `\u{1F3C1} Fim da contagem!`

        
    }



}