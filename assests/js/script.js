$("document").ready(function(){

    let numero1 = 0
    let numero2 = 0;
    let resultado = 0;

    $("#btnSumar").click(function(){

        numero1 = $("#numero1").val();

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        if(numero1 === ""){
            $("#error1").text("Debe agregar el primer numero");
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error1").text("Debe agregar el segundo numero");
            $("#error1").css("color","red");
            return;
        }


        resultado = parseInt(numero1) + parseInt(numero2);

        $("#resultado").text(resultado);
        limpiar();


        function limpiar(){
            $("#numero1").val("");
            $("#numero2").val("");
        }
    });


    $("#btnRestar").click(function(){

        numero1 = $("#numero1").val();

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        if(numero1 === ""){
            $("#error1").text("Debe agregar el primer numero");
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error1").text("Debe agregar el segundo numero");
            $("#error1").css("color","red");
            return;
        }


        resultado = parseInt(numero1) - parseInt(numero2);

        $("#resultado").text(resultado);
        limpiar();


        function limpiar(){
            $("#numero1").val("");
            $("#numero2").val("");
        }
    });

    $("#btnMultiplicar").click(function(){

        numero1 = $("#numero1").val();

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        if(numero1 === ""){
            $("#error1").text("Debe agregar el primer numero");
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error1").text("Debe agregar el segundo numero");
            $("#error1").css("color","red");
            return;
        }


        resultado = parseInt(numero1) * parseInt(numero2);

        $("#resultado").text(resultado);
        limpiar();


        function limpiar(){
            $("#numero1").val("");
            $("#numero2").val("");
        }
    });

    $("#btnDividir").click(function() {
        numero1 = $("#numero1").val();
        numero2 = $("#numero2").val();
    
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");
    
        if (numero1 === "") {
            $("#error1").text("Debe agregar el primer numero");
            $("#error1").css("color", "red");
            return;
        }
    
        if (numero2 === "") {
            $("#error1").text("Debe agregar el segundo numero");
            $("#error1").css("color", "red");
            return;
        }

        if (parseInt(numero2) === 0) {
            $("#error2").text("No se puede dividir por cero");
            $("#error2").css("color", "red");
            return;
        }
    
        resultado = parseInt(numero1) / parseInt(numero2);
    
        $("#resultado").text(resultado);
        
        function limpiar() {
            $("#numero1").val("");
            $("#numero2").val("");
        }
    });
    
});



