
function calc_acucar() {
    var acucar_value = document.querySelector("#acucar").value
    var acucar_preco = 3.00
    return (acucar_preco / 1000) * acucar_value
}

function calc_farinha() {
    var farinha_value = document.querySelector("#farinha").value
    var farinha_preco = 5.70
    return (farinha_preco / 1000) * farinha_value    
}

function calc_oleo() {
    var oleo_value = document.querySelector("#oleo").value
    var oleo_preco = 7.50
    return (oleo_preco / 1000) * oleo_value    
}

function calc_leite() {
    var leite_value = document.querySelector("#leite").value
    var leite_preco = 3.00
    return (leite_preco / 1000) * leite_value    
}

function calc_ovo() {
    var ovo_value = document.querySelector("#ovo").value
    var ovo_preco = 14
    return (ovo_preco / 30) * ovo_value
}

function calc_fermento() {
    var fermento_value = document.querySelector("#fermento").value
    var fermento_preco = 7.00
    return (fermento_preco / 300) * fermento_value
}

function total() {
    var total = calc_acucar() + calc_farinha() + calc_oleo() + calc_leite() + calc_ovo() + calc_fermento()
    console.log(total)
}