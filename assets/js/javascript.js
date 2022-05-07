//elementos card1
var botonEncriptar = document.getElementById("btnEncriptar");
var botonDesencriptar = document.getElementById("btnDesencriptar");
//elementos card2
var img = document.getElementById("imagen1");//oculto para la segunda vista
var avis1 = document.getElementById("aviso1");//oculto para primera vista
var avis2 = document.getElementById("aviso2");//oculto para primera vista
var botonCopiar = document.getElementById("btnCopiar");//oculto para primera vista    

//función encriptado, selecciona cada caso de vocales y devuelve la llave de encriptado de cada vocal
function encriptado(vocales) 
{
    switch(vocales) 
    {
        case 'e': return 'enter';
        case 'i': return 'imes';
        case 'a': return 'ai';
        case 'o': return 'ober';
        case 'u': return 'ufat';
        default : return vocales;
    }
}

//función validar, encuentra los caractéres no permitidos en la cadena de texto
function validar(cadenaTexto) {
const caracterNoPermitido = /[^a-z ñ]/; //no se permiten caracteres distintos a a-z ñ y espacio
return !caracterNoPermitido.test(cadenaTexto);
}

//función encriptar, permite validar el ingreso de texto solo y exclusivamente en minúscula y sin tildes
function encriptar() 
{
    var ingresaTexto = document.getElementById("textArea").value;//ingreso de texto a Encriptar
    var muestraResultado = document.getElementById("textArea2");//donde se muestra el Resultado del texto Encriptado

    if(ingresaTexto != "" && validar(ingresaTexto))//valida que el texto ingresado sea diferente a vacío y solo letras minusculas(función)
    {
        var resultado = ""; //nueva cadena de texto inicializada en blanco

        for (var j = 0; j <ingresaTexto.length; j++) 
        {
            var palabra = encriptado(ingresaTexto[j]);//se crea una nueva cadena ya encriptada
            resultado += palabra;
        }
        img.hidden = true;  //se ocultan elementos de la vista anterior para mostrar el text area de salida y el botón copiar
        avis1.hidden = true;
        avis2.hidden = true;
        botonCopiar.hidden = false;
        muestraResultado.hidden = false;
        muestraResultado.value = resultado; //se asocia el valor del text area 2 a la variable resultado, para que muestre el texto encriptado
    }
    else
    {
        alert("El texto no puede estar vacío **SOLO SE PERMITEN LETRAS MINÚSCULAS Y SIN TILDES** ");//alerta para el usuario
        avis1.hidden = false;
        avis2.hidden = false; 
        muestraResultado.hidden = true;
    }
}

//función desencriptar permite hacer el efecto inverso de encriptar, capturando las llaves y trasformandolas a vocal
function desencriptar()
{
    var ingresarTexto = document.getElementById("textArea").value;
    if(ingresarTexto!= "" && validar(ingresarTexto))//valida que el texto ingresado sea diferente a vacío y solo letras minusculas(función)
    {
        ingresarTexto = ingresarTexto.replaceAll("enter", "e");
        ingresarTexto = ingresarTexto.replaceAll("imes", "i");
        ingresarTexto = ingresarTexto.replaceAll("ai", "a");
        ingresarTexto = ingresarTexto.replaceAll("ober", "o");
        ingresarTexto = ingresarTexto.replaceAll("ufat", "u");
        img.hidden = true;
        avis1.hidden = true;
        avis2.hidden = true;
        document.getElementById("textArea2").value=ingresarTexto; //se le asigna al text area 2 la variable de ingresar texto, de esta forma se toma el texto ya encriptado anteriormente para desencriptarlo
    }
    else
    {
        alert("El texto no puede estar vacío **SOLO SE PERMITEN LETRAS MINÚSCULAS Y SIN TILDES** ");//alerta para el usuario
        avis1.hidden = false;
        avis2.hidden = false; 
    }
}

//permite tomar el texto del text area 2 para copiarlo al portapapeles y luego poder pegarlo y usarlo para volver a encriptar o desencriptar, etc.
function copiar() 
{
    var txtResult = document.getElementById("textArea2"); 
    txtResult.select();
    document.execCommand("copy");//funcion de JS que permite copiar el contenido
}

//botones con el método onclick de JS, con sus respectivas funciones
botonEncriptar.onclick = encriptar; 
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;