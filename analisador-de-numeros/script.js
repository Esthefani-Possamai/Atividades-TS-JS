//primeiro eu crio uma função para o evento de clicar do botão "Adicionar"

let num = document.querySelector('input#fnum')
let lista = document.querySelector ('select#flista')
let res = document.querySelector ('div#res')
let valores = []

//verificar se o número está entre 1 e 100, como solicitado
function isNumero (n){
    if (Number (n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

//verificar se o número já existe na array
function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } 
    else {
        return false
    }
}

function adicionar (){
    //verificar o número e adicioná-lo na lista

    //Se o número realmente for um número, e se esse número não está na lista, eu vou adicioná-lo
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement ('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        document.getElementById("res").style.display = "none";
    }
    else{
        window.alert('Valor inválido ou já encontrado na lista!')
    }

    //apagar o que estiver escrito e já deixar o cursor piscando para digitar o próximo número
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }
    else {
        document.getElementById("res").style.display = "inline-block";
        let tot = valores.length //comprimento da array
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        //ou for(let pos in valores), que é o laço de percurso
        for (let i = 0; i<= tot; i++){
            if (valores[i] > maior){
                maior = valores[i]
            }

            if (valores[i] < menor){
                menor = valores[i]
            }

        }

        res.innerHTML += `<p>O maior valor informado foi ${maior}.<\p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.<\p>`

        for(let pos in valores){
            soma = soma + valores[pos]
        }
        media = soma / valores.length

        res.innerHTML += `<p>A soma dos números informados é de ${soma}.<\p>`

        res.innerHTML += `<p>A média dos números informados é de ${media.toFixed(3)}.<\p>`
    }
}