var nome = document.getElementById('name')
        var email = document.getElementById('email')
        var text1 = document.getElementById('nomee')
        var text2 = document.getElementById('emaill')

        function apresentar(){
            nomee.innerHTML = `Nome do usuário: ${nome.value}`
            emaill.innerHTML = `E-mail do usuário: ${email.value}`
            mensagem.innerHTML = `Você foi descadastrado da lista de spam com sucesso.`
        }