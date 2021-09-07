function suma() {
    let a = document.getElementById("n_1").value;
    let b = document.getElementById("n_2").value;

    let opera = parseInt(a) + parseInt(b);

    let res = document.getElementById("res");
    res.innerHTML = "la suma es " + opera;
}


function edad() {
    let edad = document.getElementById("edad").value;
    let resultado = document.getElementById("resultado");

    if (edad >= 18) {

        resultado.innerHTML = "es mayor de edad"
    } else {

        resultado.innerHTML = " es menor de edad"
    }
}


function mayor() {
    let n1 = document.getElementById("s1").value;
    let n2 = document.getElementById("s2").value;
    let n3 = document.getElementById("s3").value;
    let re = document.getElementById("re");

    if (n1 > n2 && n1 > n3) {
        re.innerHTML = "resultado" + n1;
    } else if (n2 > n3 && n2 > n1) {
        re.innerHTML = "resultado" + n2;
    } else if (n3 > n1 && n3 > n2) {
        re.innerHTML = "resultado  " + n3;
    }

}

function factorial() {
    let fac = document.getElementById("fact").value;
    let resu = document.getElementById("resu");
    let factorial = 1
    for (let i = 1; i <= fac; i++) {
        factorial = factorial * i;

        resu.innerHTML = "resultado " + factorial;
    }
}

function promedio() {
    let n1 = document.getElementById("nota1").value;
    let n2 = document.getElementById("nota2").value;
    let n3 = document.getElementById("nota3").value;
    let promedio = document.getElementById("prom");

    let operacion = (parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3;

    if (operacion >= 7) {

        promedio.innerHTML = "el alumno aprueba " + operacion;
    } else {
        promedio.innerHTML = "el alumno reprobo " + operacion;
    }

}