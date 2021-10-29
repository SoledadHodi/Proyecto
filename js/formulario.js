function validar(){
    var user, email, message, expresion;
    user=document.getElementById("user").value;
    email=document.getElementById("email").value;
    message=document.getElementById("message").value;
    expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/ ;     


    if(user===""||email===""||message===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(user.length>40){
        alert("El nombre y apellido deben tener 40 caracteres como máximo");
        return false;
    }
    else if(email.length>40){
        alert("El correo es muy largo");
        return false;
    }
    else if(expresion.test(email)){
        alert("El correo no es valido");
        return false;
    }
    else if(message.length<20){
        alert("El mensaje debe tener 20 caracteres como mínimo");
        return false;
    }
}
