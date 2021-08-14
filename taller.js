function suma(){
var a = document.getElementById("n_1").value;
var b = document.getElementById("n_2").value;

var opera=parseInt(a)+parseInt(b);

var res = document.getElementById("res");
res.innerHTML="la suma es "+opera ;
}


function edad(){
var edad = document.getElementById("edad").value;
var resultado = document.getElementById("resultado");

	if(edad >= 18){
	
	resultado.innerHTML="es mayor de edad" 
	}
	else{
	  
	 resultado.innerHTML =" es menor de edad"
	}
}


function mayor(){
	var n1 = document.getElementById("s1").value;
	var n2 = document.getElementById("s2").value;
	var n3 = document.getElementById("s3").value;
	var re= document.getElementById("re");
	
	if(n1>n2 && n1>n3){
	re.innerHTML="resultado"+n1;
	}
	else if(n2>n3 && n2>n1){
	re.innerHTML="resultado"+n2;
	}
	else if(n3>n1 && n3>n2){
	re.innerHTML="resultado  " +n3;
	}
	
}
function factorial(){
	var fac = document.getElementById("fact").value;
	var resu = document.getElementById("resu");
	var factorial =1
	for(var i= 1; i<=fac;i++){
	factorial= factorial*i;

     resu.innerHTML="resultado " +factorial;
     }
}

function promedio(){
	var n1 = document.getElementById("nota1").value;
	var n2 = document.getElementById("nota2").value;
	var n3 = document.getElementById("nota3").value;
	var promedio=document.getElementById("prom");
	
	var operacion = (parseInt(n1)+parseInt(n2)+parseInt(n3))/3;
	
	if(operacion >= 7){
	
	promedio.innerHTML="el alumno aprueba " + operacion;
	}
	else{
	promedio.innerHTML="el alumno reprobo " + operacion;
	}

}