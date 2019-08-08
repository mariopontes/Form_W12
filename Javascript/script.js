window.onload = () => {
    try {
        if (window.localStorage) {
            if (window.localStorage.getItem('nome') &&
                window.localStorage.getItem('email') &&
                window.localStorage.getItem('senha') !== null) {
                document.getElementById('nome').value = window.localStorage.getItem(nome)
            }
        }
    } catch (e) {
        document.getElementById('btnSalvar').style.display = 'none';
    }
}
const storage = window.localStorage

console.log(storage)

function validaEmail(email) {
    if (email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        document.getElementById('email').style.border = "1px solid red"
        return false;
    } else {
        document.getElementById('email').style.border = "1px solid green"
        return true
    }
}

function validaSenha(senha) {
    if (senha.length < 7) {
        document.getElementById('senha').style.border = "1px solid red"
        return false;
    } else {
        document.getElementById('senha').style.border = "1px solid green"
        return true
    }
}

function salvar(formData) {
    let validNome = true;
    let validEmail = true;
    let validSenha = true;

    if (formData.nome.value.length < 3) {
        document.getElementById('nome').style.border = "1px solid red"
        validNome = false
    } else {
        document.getElementById('nome').style.border = "1px solid green"
    }

    if (formData.email.value == "" || formData.email.value.indexOf('@') == -1 || formData.email.value.indexOf('.') == -1) {
        document.getElementById('email').style.border = "1px solid red"
        validEmail = false
    } else {
        document.getElementById('email').style.border = "1px solid green"
    }

    if (formData.senha.value.length < 7) {
        document.getElementById('senha').style.border = "1px solid red"
        validSenha = false
    } else {
        document.getElementById('senha').style.border = "1px solid green"
    }

    if (validNome == true && validEmail == true && validSenha == true) {
        window.localStorage.setItem('nome', formData.nome.value)
        window.localStorage.setItem('email', formData.email.value)
        window.localStorage.setItem('senha', formData.senha.value)

        document.getElementsByClassName('box_cadastro')[0].style.display = 'none'
        document.getElementById('changeData').style.display = 'block'
        document.getElementById('dataName').innerHTML = `Nome: ${storage.nome}`
        document.getElementById('dataEmail').innerHTML = `E-mail: ${storage.email}`
        document.getElementById('dataPass').innerHTML = `Senha: ${storage.senha}`
    } else {
        alert('Preencha corretamente os campos em vermelho')
    }

}