function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById ('seltab')

    if (num.value.length > 0){
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while (c <= 10){
            let li = document.createElement('option')
            li.text = `${n} x ${c} = ${n*c}`
            li.value = `tab${c}`
            tab.appendChild(li)
            c++
        }
    }

    else {
        window.alert('Por favor, digite um número: ')
    }
    
}