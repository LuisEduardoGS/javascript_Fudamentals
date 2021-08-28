// 1.	Implementar un algoritmo que reciba 2 argumentos y los sume,
// el resultado se deberá imprimir en pantalla.

function sum(a, b) {
    return a + b;
}
//console.log("Suma", sum(1,2))

// 2.	Un estudiante realiza 4 exámenes, calcular el promedio de estos.

function promedio_notas(a, b, c, d) {
    return (a + b + c + d) / 4;
}
//console.log("promedio_notas", promedio_notas(15,12,18,15))

//3.	Calcular el área de un rectángulo

function area_Rectangulo(a, b) {
    return a * b;
}
//console.log("area_Rectangulo",area_Rectangulo(20,5))

//4.	Calcular el área de un triángulo

function area_Triangulo(a, b) {
    return (a * b) / 2;
}
//console.log("area_triangulo",area_Triangulo(20,5))

//5.	Calcular el área de una circunferencia

function area_Circunferencia(r) {
    return Math.PI * Math.pow(r, 2);
}
//console.log("area_Circunferencia",area_Circunferencia(100))

//6.	Determinar el sueldo semanal de un trabajador basándose
// en sus horas trabajadas y su salario de hora hombre

function sueldo_Semanal(horasTrabajadas, salarioxHora) {
    return horasTrabajadas * salarioxHora;
}
//console.log("sueldo_Semanal",sueldo_Semanal(40,30))

//7.	Una modista, para realizar sus prendas de vestir,
//encarga las telas al extranjero. Para cada pedido,
//tiene que proporcionar las medidas de la tela en pulgadas,
//pero ella generalmente las tiene en metros.
// Realice un algoritmo para ayudar a resolver el problema,
//determinando cuantas pulgadas debe pedir con base en los
//metros que requiere. Represéntelo mediante
//el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m).

function pedido_Modista(medidaEnMetros) {
    const pulgada = 0.0254;
    return medidaEnMetros * pulgada;
}
//console.log("pedido_Modista:"," Se debe pedir", pedido_Modista(20),"pulg")

//8.	Una empresa importadora desea determinar cuántos dólares
// puede adquirir con equis cantidad de dinero peruano.

function conversion_Dolares(Soles) {
    let PEN = Soles;
    const tipoCambioUSD = 4.15;
    return Soles / tipoCambioUSD;
}
//console.log("conversion_Dolares:" ,"Puede adquirir ",conversion_Dolares(12)," Dolares")

//9.	Una empresa que contrata personal requiere determinar
//la edad de las personas que solicitan trabajo, pero cuando
//se les realiza la entrevista sólo se les pregunta el año en
//que nacieron

function determinar_Edad() {
    let anioNac = prompt("Ingrese su año de nacimiento:");
    let anioActual = new Date().getFullYear();
    console.log("Edad: ", anioActual - anioNac);
}
//determinar_Edad()

//10.	Se tiene el nombre y la edad de tres personas.
//Se desea saber el nombre y la edad de la persona de menor edad.

function nombreEdad_Menor() {
    let nombre1 = prompt("Ingrese primer nombre:");
    let edad1 = prompt("Ingrese edad de " + nombre1);
    let nombre2 = prompt("Ingrese segundo nombre:");
    let edad2 = prompt("Ingrese edad de " + nombre2);
    let nombre3 = prompt("Ingrese tercer nombre:");
    let edad3 = prompt("Ingrese edad de " + nombre3);

    if (parseInt(edad1) < parseInt(edad2) && parseInt(edad1) < parseInt(edad2)) {
        console.log("El menor es " + nombre1 + " con " + edad1 + " años");
    } else if (
        parseInt(edad2) < parseInt(edad1) &&
        parseInt(edad2) < parseInt(edad3)
    ) {
        console.log("El menor es " + nombre2 + " con " + edad2 + " años");
    } else {
        console.log("El menor es " + nombre3 + " con " + edad3 + " años");
    }
}
//nombreEdad_Menor()

//11.	Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen
// un año,se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años.
// Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y
// represéntelo ,que permita determinar el bono que recibirá un trabajador

function bono_Trabajador(años) {
    if (años >= 1) {
        switch (años) {
            case 1:
                console.log("Su bono es $100");
                break;
            case 2:
                console.log("Su bono es $200");
                break;
            case 3:
                console.log("Su bono es $300");
                break;
            case 4:
                console.log("Su bono es $400");
                break;
            case 5:
                console.log("Su bono es $500");
                break;
            default:
                console.log("Su bono es $1000");
                break;
        }
    }
    else {
        console.log("Lo sentimos. No le corresponde un bono");
    }
}

//bono_Trabajador(5)

//12.	Un profesor tiene un salario inicial de $1500, y recibe un incremento de
// 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario
// ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la
// solución, utilizando el ciclo apropiado.

function incremento_Salario() {
    let salario = 1500

    for (i = 0; i < 6; i++) {
        salario = salario + (salario * 0.1);
        console.log(`El año ${i + 1} su salario es ${salario}`)
    }
}

//incremento_Salario()

//13.	Realice un algoritmo para leer las calificaciones de N alumnos y determine
// el número de aprobados y reprobados.

function aprobados_desaprobados() {
    let nroAprobados = 0;
    let nroDesaprobados = 0;
    let nroEstudiantes = prompt("Ingrese nro estudiantes:");
    for (i = 0; i < nroEstudiantes; i++) {
        let nota = prompt(`Ingrese nota ${i + 1}`)
        if (nota >= 11)
            nroAprobados = nroAprobados + 1;
        else
            nroDesaprobados = nroDesaprobados + 1;
    }
    console.log(`Total de aprobados: ${nroAprobados}`);
    console.log(`Total de desaprobados: ${nroDesaprobados}`);
}

//aprobados_desaprobados()

//14.	Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea
//contabilizar, de un lote de N focos, el número de focos de cada color que hay
// en existencia.

function nro_Focos_Color() {
    let nroFocosVerdes = 0;
    let nroFocosBlancos = 0;
    let nroFocosRojos = 0;
    let nroFocos = prompt("Ingrese nro focos:")
    for (i = 0; i < nroFocos; i++) {
        let foco = prompt(`Ingrese color foco ${i + 1}`)
        switch (foco) {
            case "verde":
                nroFocosVerdes++;
                break;
            case "blanco":
                nroFocosBlancos++;
                break;
            case "rojo":
                nroFocosRojos++;
                break;
            default:
                console.log(`color invalido: ${foco}`);
                break;
        }
    }
    console.log(`Total focos verdes: ${nroFocosVerdes}`);
    console.log(`Total focos blancos: ${nroFocosBlancos}`);
    console.log(`Total focos rojos: ${nroFocosRojos}`);
}

//nro_Focos_Color()


//15.	Realice un algoritmo para determinar si una persona puede votar con base
// en su edad en las próximas elecciones.

function votar_Elecciones() {
    let edad = prompt("Ingrese su edad:");

    if (edad >= 18) {
        console.log("Ud. es apto para votar.");
    } else {
        console.log("Ud. no puede votar.");
    }

}

//votar_Elecciones()

