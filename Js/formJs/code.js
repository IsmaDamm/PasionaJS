
seleccion();
function seleccion(){
   let seleccion =  document.getElementById("select")
    //filtro con el length
   if (seleccion.options[0].selected && seleccion.options[1].selected || seleccion.options[0].selected && seleccion.options[2].selected || seleccion.options[2].selected && seleccion.options[1].selected){
    return true;
   }
   else{
    return false;
   }
}
function comprobarCorreo(){
    let correo =  document.getElementsByTagName("input")[0]
    //regex del email copiado descaradamente
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //return de el correo
    if (correo.value.match(validRegex)) {
        return true;
    }
    else{
            return false;
        }
}

function chechbox(){
   let check1 =  document.getElementsByTagName("input")[1]
   let check2 =  document.getElementsByTagName("input")[2]

   if(check1.checked || check2.checked){
    return true;
   }
   else{
    return false;
   }
}

chechbox();
let enviar =  document.getElementById("enviar")

enviar.addEventListener("click", function(){
    if(chechbox() == true && comprobarCorreo() == true && seleccion() == true){
        document.getElementsByTagName("form")[0].submit();
    }
    else{
        alert("Soy un alert feo para decirte que un campo seleccionado no es válido");
    }
})