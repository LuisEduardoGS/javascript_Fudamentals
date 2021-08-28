function ejercicioUno() {
    let sexo = prompt("Ingresa tu sexo:");
    let edad = prompt("Ingresa tu edad");
    let nacionalidad = prompt("Ingresa tu nacionalidad");

    if (sexo == "m" && edad > 18 && nacionalidad !== "peruana") {
        alert("Bienvenido al club");
    } else {
        alert("No eres bienvenido");
    }
}

function ejercicioDos() {
    let nameUser = prompt("Ingresa tu nombre");

    if (nameUser == "sebastian") {
        console.log("Hola Sebastian");
    } else if (nameUser == "jose") {
        console.log("Hola Jose");
    } else if (nameUser == "luis") {
        console.log("Hola Luis");
    } else {
        console.log("No te conozco");
    }
}

function ejercicioTres() {
    let frutas = prompt("Ingresa tu fruta ('uva','mandarina','papaya')");

    switch (frutas) {
        case "uva": {
            alert("Elegiste la uva");
            break;
        }
        case "mandarina": {
            alert("Elegiste la mandarina");
            break;
        }
        case "papaya": {
            alert("Elegiste la papaya");
            break;
        }
        default: {
            alert("Esa fruta no la tenemos");
            break;
        }
    }
}

function esHombre() {
    console.log("es hombre!!!");
    console.log("segunda linea");
}

function esMujer() {
    console.log("es mujer!!!");
    console.log("segunda linea");
}

function ejercicioCuatro() {
    let sexo = prompt("Ingresa tu sexo (m, f)");

    sexo == "m" ? esHombre() : esMujer();
}

function ejercicioCinco() {
    function suma(a, b) {
        if (arguments.length > 2) throw new Error("NO soporta mas de 2 argumentos");
        return a + b;
    }

    suma(2, 3, 4, 5, 6);
}

function ejercicioSeis() {
    function setName(name) {
        //debugger;
        let message = "";
        try {
            if (name.length < 6) throw "SHORT";
            if (name.length > 10) throw "LONG";

            message = 'El nombre ${name} es correcto';
            //comillas al revez
        } catch (error) {
            console.log("Error", error);
            if (error == "SHORT") Message = `El nombre ${name} es muy corto`;
            if (error == "LONG") Message = `El nombre ${name} es muy largo`;
        } finally {
            console.log("Nombre evaluado: ", message);
        }
    }
}

// setName("ana"); //SHORT
// setName("jose luis alberto"); //LONG
// setName("sebastian");
/*
function ejercicioSiete() {
    let impresora = {
        Color: "negro",
        marca: "hp",
        modelo: "bmw",
        cantidadDeHojas: 0,
        imprimir: function () {
            if (this.cantidadDeHojas > 0) {
                console.log("imprimir!!");
            } else if (this.cantidadDeHojas <= 0) {
                console.log("agrega hojas!!");
            }
        },
        skanear: function () {
            console.log("impresora skaneando");
        },
        copiar: function () {
        },
        creadores: {
            uno: {
                nombre="pedro",
            },
            dos: {
                nombre="juan",
            },
            tres: {
                nombre="luis",
            },
        },
    },
};
*/
const button = document.querySelector("button");
button.onclick = function () {
    impresora.imprimir();
}

const form = document.querySelector("form");

form.onsubmit = function (event) {
    event.preventdefault();
    impresora.cantidadDeHojas = 10;
    console.log("registrado envío de hojas");
    console.log(impresora);
}

function ejercicioOcho() {
    let numbers = [0, 1, 2, 3, 3232323, 5, 6, 7, 8, 9, 10];
    let names = ["Eduardo", "Jose", "Pedro", "Hector"];
    let mix = [10, "Edu", true, null, undefined];
    let arrayArrays = [0, ["Pedro", [0, 1]]];
    let alumnos = [
        {
            name: "eduardo",
            age: 35,
            sexo: "m",
            materias: ["matematica", "lenguaje", "arte"],
        },
        {
            name: "jose",
            age: 32,
            sexo: "m",
            materias: ["matematica", "lenguaje", "arte"],
        },
        {
            name: "melissa",
            age: 40,
            sexo: "f",
            materias: ["matematica", "lenguaje", "arte"],
        },
        {
            name: "cristina",
            age: 20,
            sexo: "f",
            materias: ["matematica", "lenguaje", "arte"],
        },
    ];

    console.log("numbers", numbers);
    console.log("names", names);
    console.log("mix", mix);
    console.log("numbers", numbers[4]);
    console.log(arrayArrays[1][1]);
    //modificacioj array por indice
    numbers[0] = 20;

    console.log(numbers);
}

function ejercicioNueve() {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let alumnos = [
        {
            name: "eduardo",
            age: 35,
            sexo: "m",
            materias: ["matematica", "lenguaje", "arte"],
        },
        {
            name: "jose",
            age: 32,
            sexo: "m",
            materias: ["matematica", "lenguaje", "arte"],
        },
        {
            name: "melissa",
            age: 40,
            sexo: "f",
            materias: ["matematica", "lenguaje", "arte"],
        },
        {
            name: "cristina",
            age: 20,
            sexo: "f",
            materias: ["matematica", "lenguaje", "arte"],
        },
    ];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            console.log("es par", numbers[i]);
        }
    }

    for (let i = 0; i < alumnos.length; i++) {
        console.log("menor de 40 años es ", alumnos[i]);

    }


}


//ejercicioUno()
//ejercicioDos()
//ejercicioTres()
//ejercicioCuatro();
