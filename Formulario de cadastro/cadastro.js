function pesquisarcep(CEP) {
    let cepfinal = CEP
    let validacep = /^[0-9]{8}$/
    if (cepfinal != "") {
        if (validacep.test(cepfinal)) {
            let script = document.createElement('script')
            script.src = 'https://viacep.com.br/ws/' + cepfinal + '/json/?callback=callback_name'
            document.body.appendChild(script)
        }
        else {
            alert('CEP inválido')
            limparcampo()
        }
    }
    else {
        limparcampo()
    }
}
console.log('ta safe')
function callback_name(objetocep) {
    if (!("erro" in objetocep)) {
        document.getElementById('Endereco').value = (objetocep.logradouro)
        document.getElementById('Bairro').value = (objetocep.bairro)
        document.getElementById('Cidade').value = (objetocep.localidade)
        document.getElementById('UF').value = (objetocep.uf)
    }
    else {
        limparcampo()
        alert("CEP não encontrado")
    }
}
console.log('ta safe')

function limparcampo() {
    document.getElementById('CEP').value = ""
    document.getElementById('Endereço').value = ""
    document.getElementById('Bairro').value = ""
    document.getElementById('Cidade').value = ""
    document.getElementById('UF').value = ""
}

function btnenviar()
{
    if(confirm("Deseja confirmar?"))
    {
        return true
    }
    else
    {
        return false
    }
}