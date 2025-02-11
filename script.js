var estado_llanta_del_der_malo = document.getElementById('estado_llanta_del_der_malo');
var contenedorObs = document.getElementById('contenedorObs');

estado_llanta_del_der_malo.addEventListener('click', function(){
    var inputPrueba = document.createElement('input');
    inputPrueba.type = "text";
    contenedorObs.appendChild(inputPrueba);
});
