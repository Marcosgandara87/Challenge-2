var palabras = ["ALURA", "ORACLE","HOLA"]
var boton2 = document.getElementById("nueva-palabra")
var boton1 =document.getElementById("iniciar-juego")
var x =850
var y =50
var msg = ''
var inicio = 0;
var horca;
var respuesta = [];
var  cara = 0 ;
var intentos = 1;
var aciertos = 0;
var pantalla = document.querySelector("canvas");
                var pincel = pantalla.getContext("2d");


boton2.onclick = agregarPalabra;
boton1.onclick = elegirPalabra;

    function agregarPalabra(){
    
        var palabra = document.getElementById("input-nueva-palabra").value;
        var min = validarMinuscula(palabra  )
        if (palabra !="" && min ==0){
        palabras.push(palabra)
        console.log(palabras)
        document.getElementById("input-nueva-palabra").value = "";
        }
         min = 0;

    }

    function elegirPalabra(){
        inicio = 1;
        var aleatorio = Math.round(Math.random()*(palabras.length - 1));
        horca = (palabras[aleatorio]);
        console.log(horca);
        dibujarLineas(horca.length);
        respuesta.splice(0,respuesta.length);
        x = 850;
        y = 50;
        cara = 0;
        aciertos = 0;
        intentos = 0;
        var btn = document.querySelector("#nueva-palabra")
        btn.disabled = true;
            
            var img = new Image();
            img.src = "img/"+0+".jpg";
            img.onload = function(){
            pincel.drawImage(img,30,50);
            
            }

    }

    window.onload = function() { document.onkeypress = mostrarInformacionCaracter;}
        
    
        function mostrarInformacionCaracter(evObject) {
            cara = 0;
            if(inicio == 1){
                
                var pantalla = document.querySelector("canvas");
                var pincel = pantalla.getContext("2d");
            

             renglones();
            var elCaracter = String.fromCharCode(evObject.which);
            msg =  elCaracter;
            
            var min = validarMinuscula(msg);
            var til = validarTilde();
            var res = validarRespuesta(elCaracter);
            
                if ((min == 0) && (til == 0) && (res == 0)){
                   
                    respuesta.push(elCaracter);    
                    validarCaracter(elCaracter);
                    
                    
                    if (cara != 1){
                            intentos = intentos + 1
                            
                            pincel.font = "italic 40px Arial";
                            pincel.strokeStyle = "black";
                            pincel.strokeText(elCaracter,x,y);   
                            x = x + 40;

                            var img = new Image();
                            img.src = "img/"+intentos+".jpg";
                            img.onload = function(){
                            pincel.drawImage(img,30,50);
                            
                            if (intentos == 6){
                                pincel.strokeStyle = "red";
                                pincel.strokeText(("No tienes mas intentos"),550,(y+50));
                                inicio = 0;
                                var btn = document.querySelector("#nueva-palabra")
                                btn.disabled = false;
                                incio = 0;


                            } 

                        }
                            
                    }
                    
                    if (aciertos == horca.length){
                        pincel.strokeStyle = "green";
                        pincel.strokeText(("Juego Ganado"),550,(y+50));
                        inicio = 0;
                        var btn = document.querySelector("#nueva-palabra")
                        btn.disabled = false;

                            var img = new Image();
                            img.src = "img/"+7+".jpg";
                            img.onload = function(){
                            pincel.drawImage(img,30,50);
                            
                                }

                    }



                     

                }
           min = 0;
           til = 0;



            
        }
        
    }   
        
        function renglones(){
            if (x > 1100){
                x = 850
                y = y + 50
            }
        }

        function validarMinuscula(texto){
            if (texto !=""){       
            var tex = texto.toUpperCase();
            if(tex != texto){
                alert("Contiene Minuscula");
                return 1;
                
            }else{  
                return 0;
            }
        }else{
            alert("Campo vacio")
        }
        } 
        
        
        function validarTilde() {
            var tex = msg.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if(msg == tex){
                return 0;
            }else{  
                 alert("Contiene tilde");
                return 1;
            }
          } 



    function dibujarLineas(cantL){


        var g=500;
        var pantalla = document.querySelector("canvas");
        var pincel = pantalla.getContext("2d");
        pincel.clearRect(0, 0,pantalla.width,pantalla.height);

        for (i= 0; i<cantL; i++){
        
        pincel.fillStyle = "blue"
	    pincel.fillRect(g,390,50,5);
        g = g + 100;
	    }
 
    
    }


    function validarRespuesta(caracter){
    
        for (i= 0; i<=respuesta.length; i++){
            
            if (caracter == respuesta[i]){
                alert("Caracter entregado")
                return 1;
            }
        } 
            
            return 0; 

    }


function validarCaracter(elCaracter){
    for (var i =0; i <horca.length; i++){
         var pantalla = document.querySelector("canvas");
        var pincel = pantalla.getContext("2d");
        pincel.font = "italic 40px Arial";
        pincel.strokeStyle = "black";
        
        if (elCaracter == horca.substring(i, i+1)) {
            pincel.strokeText(msg,(510 +(i*100)),380);
            
            
            cara = 1;
            aciertos = aciertos + 1
            var img = new Image();
            img.src = "img/"+0+".jpg";
            img.onload = function(){
            pincel.drawImage(img,30,50);
            
           }


        }

        }
        
        

}