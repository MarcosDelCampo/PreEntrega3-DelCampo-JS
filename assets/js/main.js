class clase {
    constructor(nombre, zona, categoria, edad, formato, turno, dia, valor, nivel){
        this.nombre = nombre.toUpperCase()
        this.zona = zona.toUpperCase()
        this.categoria = categoria.toUpperCase()
        this.edad = edad.toUpperCase()
        this.formato = formato.toUpperCase()
        this.turno = turno.toUpperCase()
        this.dia = dia.toUpperCase()
        this.valor = valor
        this.nivel = nivel.toUpperCase()

    }
    
}

const clases = [];

clases.push(new clase ("anthropos",        "norte", "comedia musical", "niños",        "puesta", "tarde",  "lunes",     8000, "todos"));
clases.push(new clase ("anthropos",        "norte", "comedia musical", "adolescentes", "puesta", "tarde",  "miercoles", 8000, "todos"));
clases.push(new clase ("anthropos",        "norte", "comedia musical", "jovenes",      "puesta", "noche",  "miercoles", 7000, "todos"));
clases.push(new clase ("anthropos",        "norte", "comedia musical", "adultos",      "puesta", "noche",  "lunes",     7000, "todos"));
clases.push(new clase ("amalgama",         "caba",  "comedia musical", "niños",        "puesta", "tarde",  "martes",    6000, "todos"));
clases.push(new clase ("amalgama",         "caba",  "comedia musical", "adolescentes", "puesta", "tarde",  "jueves",    6000, "todos"));
clases.push(new clase ("amalgama",         "caba",  "comedia musical", "jovenes",      "puesta", "noche",  "martes",    5000, "todos"));
clases.push(new clase ("amalgama",         "caba",  "comedia musical", "adultos",      "puesta", "noche",  "jueves",    5000, "todos"));
clases.push(new clase ("musical moments",  "norte", "comedia musical", "niños",        "puesta", "tarde",  "martes",    9000, "todos"));
clases.push(new clase ("musical moments",  "norte", "comedia musical", "adolescentes", "puesta", "tarde",  "lunes",     9000, "todos"));
clases.push(new clase ("musical moments",  "norte", "comedia musical", "jovenes",      "puesta", "noche",  "lunes",     8500, "todos"));
clases.push(new clase ("musical moments",  "norte", "comedia musical", "aadultos",     "puesta", "noche",  "martes",    8500, "todos"));
clases.push(new clase ("musical moments",  "norte", "comedia musical", "jovenes",      "puesta", "tarde",  "miercoles", 9000, "avanzado"));
clases.push(new clase ("mahas",            "caba",  "improvisacion",   "jovenes",      "clases", "noche",  "lunes",     6500, "principiante"));
clases.push(new clase ("mahas",            "caba",  "improvisacion",   "adultos",      "clases", "noche",  "lunes",     6500, "principiante"));
clases.push(new clase ("mahas",            "caba",  "improvisacion",   "jovenes",      "clases", "mañana", "martes",    7000, "intermedio"));
clases.push(new clase ("mahas",            "caba",  "improvisacion",   "adultos",      "clases", "mañana", "martes",    7000, "intermedio"));
clases.push(new clase ("mahas",            "caba",  "improvisacion",   "adultos",      "clases", "noche",  "jueves",    7500, "avanzado"));
clases.push(new clase ("mahas",            "caba",  "improvisacion",   "jovenes",      "clases", "tarde",  "jueves",    7500, "avanzado"));
clases.push(new clase ("percipere",        "norte", "teatro",          "adultos",      "clases", "noche",  "jueves",    8500, "todos"));
clases.push(new clase ("percipere",        "norte", "teatro",          "jovenes",      "clases", "noche",  "martes",    8500, "todos"));
clases.push(new clase ("percipere",        "norte", "teatro",          "adolescentes", "clases", "tarde",  "jueves",    8500, "todos"));
clases.push(new clase ("percipere",        "norte", "teatro",          "niños",        "clases", "mañana", "sabado",    8500, "todos"));
clases.push(new clase ("kairos",           "sur",   "teatro",          "adultos",      "clases", "noche",  "jueves",    6500, "todos"));
clases.push(new clase ("kairos",           "sur",   "teatro",          "jovenes",      "clases", "tarde",  "jueves",    6500, "todos"));
clases.push(new clase ("kairos",           "sur",   "teatro",          "adolescentes", "clases", "mañana", "domingo",   7500, "todos"));
clases.push(new clase ("kairos",           "sur",   "teatro",          "niños",        "clases", "mañana", "sabado",    7500, "todos"));
clases.push(new clase ("revelio",          "sur",   "comedia musical", "niños",        "puesta", "tarde",  "lunes",     8000, "todos"));
clases.push(new clase ("revelio",          "sur",   "comedia musical", "adolescentes", "puesta", "tarde",  "miercoles", 8000, "todos"));
clases.push(new clase ("revelio",          "sur",   "comedia musical", "jovenes",      "puesta", "noche",  "miercoles", 7000, "todos"));
clases.push(new clase ("revelio",          "sur",   "comedia musical", "adultos",      "puesta", "noche",  "lunes",     7000, "todos"));
clases.push(new clase ("teatrap",          "sur",   "improvisacion",   "adolescentes", "clases", "noche",  "lunes",     5500, "principiante"));
clases.push(new clase ("teatrap",          "sur",   "improvisacion",   "jovenes",      "clases", "mañana", "martes",    6000, "intermedio"));
clases.push(new clase ("teatrap",          "sur",   "improvisacion",   "adolescentes", "clases", "mañana", "martes",    6000, "intermedio"));
clases.push(new clase ("teatrap",          "sur",   "improvisacion",   "adultos",      "clases", "noche",  "jueves",    6500, "avanzado"));
clases.push(new clase ("teatrap",          "sur",   "improvisacion",   "jovenes",      "clases", "tarde",  "jueves",    6500, "avanzado"));
clases.push(new clase ("90-91",            "oeste", "teatro",          "adultos",      "puesta", "noche",  "jueves",    6000, "todos"));
clases.push(new clase ("90-91",            "oeste", "teatro",          "jovenes",      "puesta", "tarde",  "jueves",    6000, "todos"));
clases.push(new clase ("90-91",            "oeste", "teatro",          "adolescentes", "puesta", "mañana", "domingo",   7000, "todos"));
clases.push(new clase ("90-91",            "oeste", "teatro",          "niños",        "puesta", "mañana", "sabado",    7000, "todos"));
clases.push(new clase ("odisea",           "oeste", "comedia musical", "niños",        "puesta", "tarde",  "lunes",     6000, "todos"));
clases.push(new clase ("odisea",           "oeste", "comedia musical", "adolescentes", "puesta", "tarde",  "lunes",     6000, "todos"));
clases.push(new clase ("odisea",           "oeste", "comedia musical", "jovenes",      "puesta", "noche",  "lunes",     6500, "todos"));
clases.push(new clase ("odisea",           "oeste", "comedia musical", "adultos",      "puesta", "noche",  "lunes",     6500, "todos"));
clases.push(new clase ("moscu",            "oeste", "improvisacion",   "adolescentes", "clases", "tarde",  "sabado",    5500, "todos"));
clases.push(new clase ("moscu",            "oeste", "improvisacion",   "jovenes",      "clases", "mañana", "domingo",   5000, "todos"));
clases.push(new clase ("moscu",            "oeste", "improvisacion",   "adolescentes", "clases", "mañana", "sabado",    5000, "todos"));
clases.push(new clase ("moscu",            "oeste", "improvisacion",   "adultos",      "clases", "noche",  "jueves",    5500, "todos"));
clases.push(new clase ("moscu",            "oeste", "improvisacion",   "jovenes",      "clases", "tarde",  "jueves",    5500, "todos"));


let opcionesLugar = document.getElementById("lugar")
const lugares = ["anthropos", "amalgama", "musical moments", "mahas", "percipere", "kairos", "revelio", "teatrap", "90-91", "odisea", "moscu"]

for (const lugar of lugares){
    let btn = document.createElement("button");
    btn.innerHTML = lugar.toUpperCase();
    btn.className = "btnLugar";
    opcionesLugar.appendChild(btn);
}

let opcionesZona = document.getElementById("zona")
const zonas = ["caba", "norte", "oeste", "sur"]

for (const zona of zonas){
    let btn = document.createElement("button");
    btn.innerHTML = zona.toUpperCase();
    btn.className = "btnZona";
    opcionesZona.appendChild(btn);
}

let opcionesCategoria = document.getElementById("categoria")
const categorias = ["teatro", "comedia musical", "improvisacion"]

for (const categoria of categorias){
    let btn = document.createElement("button");
    btn.innerHTML = categoria.toUpperCase();
    btn.className = "btnCategoria";
    opcionesCategoria.appendChild(btn);
}

let opcionesEdad = document.getElementById("edad")
const edades = ["niños", "adolescentes", "jovenes", "adultos"]

for (const edad of edades){
    let btn = document.createElement("button");
    btn.innerHTML = edad.toUpperCase();
    btn.className = "btnEdad";
    opcionesEdad.appendChild(btn);
}

let opcionesFormato = document.getElementById("formato")
const formatos = ["puesta", "clases"]

for (const formato of formatos){
    let btn = document.createElement("button");
    btn.innerHTML = formato.toUpperCase();
    btn.className = "btnFormato";
    opcionesFormato.appendChild(btn);
}

let opcionesTurno = document.getElementById("turno")
const turnos = ["mañana", "tarde", "noche"]

for (const turno of turnos){
    let btn = document.createElement("button");
    btn.innerHTML = turno.toUpperCase();
    btn.className = "btnTurno";
    opcionesTurno.appendChild(btn);
}

let opcionesDia = document.getElementById("dia")
const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

for (const dia of dias){
    let btn = document.createElement("button");
    btn.innerHTML = dia.toUpperCase();
    btn.className = "btnDia";
    opcionesDia.appendChild(btn);
}

let opcionesValor = document.getElementById("valor")
const valores = [5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000]

for (const valor of valores){
    let btn = document.createElement("button");
    btn.innerHTML = valor;
    btn.className = "btnValor";
    opcionesValor.appendChild(btn);
}

let opcionesNivel = document.getElementById("nivel")
const niveles = ["principiante", "intermedio", "avanzado", "todos"]

for (const nivel of niveles){
    let btn = document.createElement("button");
    btn.innerHTML = nivel.toUpperCase();
    btn.className = "btnNivel";
    opcionesNivel.appendChild(btn);
}

function resetearResultados() {
    let resultados = document.querySelector("#contenedorResultados")
    while (resultados.firstChild) {
        resultados.removeChild(resultados.firstChild)
    }
}

function infoClases(clases) {
    resetearResultados()

    for (const clase of clases) {

        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3> ${clase.nombre}</h3>
                                <p> Zona: ${clase.zona}</p>
                                <p> Categoría: ${clase.categoria}</p>
                                <p> Edad: ${clase.edad}</p>
                                <p> Formato: ${clase.formato}</p>
                                <p> Turno: ${clase.turno}</p>
                                <p> Día: ${clase.dia}</p>
                                <p> Valor: ${clase.valor}</p>
                                <p> Nivel: ${clase.nivel}</p>
                                `;
        contenedor.className = "cards";
        document.querySelector("#contenedorResultados").appendChild(contenedor);
    }
    
}
    function obtenerFiltroActual() {
    const filtroComoString = localStorage.getItem("criterioFiltros")
    return jsonMapa(filtroComoString)
    }

    function stringifyMapa(map) {
        const string = JSON.stringify(Array.from(map))
        return string
    }
    
    function jsonMapa(json) {
        const map = new Map(JSON.parse(json))
        return map
    }

function crearFiltroEnLocalStorage() {
    if (!localStorage.getItem("criterioFiltros")) {
        resetearFiltros()
    }
}
    
crearFiltroEnLocalStorage()

function resetearFiltros() {
    const filtroVacio = new Map()

        filtroVacio.set("nombre", "")
        filtroVacio.set("zona", "")
        filtroVacio.set("categoria", "")
        filtroVacio.set("edad", "")
        filtroVacio.set("formato", "")
        filtroVacio.set("turno", "")
        filtroVacio.set("dia", "")
        filtroVacio.set("valor", "")
        filtroVacio.set("nivel", "")

        localStorage.setItem("criterioFiltros", stringifyMapa(filtroVacio))
        }

function resetearTodo() {
    resetearFiltros()
    resetearResultados()
}

function noHayClases(){
    resetearResultados()
    let resultados = document.querySelector("#contenedorResultados")
    resultados.innerText = "No hay resultados"
}

function filtrarNombre(clase) {
    let filtroActual = obtenerFiltroActual()
   if (filtroActual.get("nombre")) {
       return clase.nombre == filtroActual.get("nombre")
   }
   return clase;
}

function filtrarZona(clase) {
     let filtroActual = obtenerFiltroActual()
    
    if(filtroActual.get("zona")){
        return clase.zona == filtroActual.get("zona")
    }
    return clase;
}

function filtrarCategoria(clase) {
     let filtroActual = obtenerFiltroActual()
    
    if(filtroActual.get("categoria")){
        return clase.categoria == filtroActual.get("categoria")
    }
    return clase;
}

function filtrarEdad(clase) {
     let filtroActual = obtenerFiltroActual()
    
    if(filtroActual.get("edad")){
        return clase.edad == filtroActual.get("edad")
    }
    return clase;
}

function filtrarFormato(clase) {
     let filtroActual = obtenerFiltroActual()
    
    if(filtroActual.get("formato")){
        return clase.formato == filtroActual.get("formato")
    }
    return clase;
}

function filtrarTurno(clase) {
     let filtroActual = obtenerFiltroActual()
    
    if(filtroActual.get("turno")){
        return clase.turno  == filtroActual.get("turno")
    }
    return clase;
}
function filtrarDia(clase) {
     let filtroActual = obtenerFiltroActual()
    
    if(filtroActual.get("dia")){
        return clase.dia  == filtroActual.get("dia")
    }
    return clase;
}

function filtrarValor(clase) {
    let filtroActual = obtenerFiltroActual()

    if(filtroActual.get("valor")){
        return clase.valor == filtroActual.get("valor")
    }
    return clase;
}

function filtrarNivel(clase) {
         let filtroActual = obtenerFiltroActual()

    if(filtroActual.get("nivel")){
        return clase.nivel == filtroActual.get("nivel")
    }
    return clase;
}    


function filtrarClase() {
    let resultado = clases
        .filter(filtrarNombre)
        .filter(filtrarZona)
        .filter(filtrarCategoria)
        .filter(filtrarEdad)
        .filter(filtrarFormato)
        .filter(filtrarTurno)
        .filter(filtrarDia)
        .filter(filtrarValor)
        .filter(filtrarNivel);
    
    if (resultado.length) {
        infoClases(resultado)
    }
    
    else {
        noHayClases()
    }
}

let botones = document.querySelectorAll(".opcion button");
botones.forEach((item) => {
    let clickBoton = (evt) => {
        let criterioDeFiltrosActuales = obtenerFiltroActual()

        if (item.className == "btnLugar"){
       
            criterioDeFiltrosActuales.set("nombre", item.innerText)

        }
        else if(item.className == "btnZona"){
       
            criterioDeFiltrosActuales.set("zona", item.innerText)

        }
        else if(item.className == "btnCategoria"){
       
            criterioDeFiltrosActuales.set("categoria", item.innerText)

        }        
        else if(item.className == "btnEdad"){
       
            criterioDeFiltrosActuales.set("edad", item.innerText)

        }
        else if(item.className == "btnFormato"){
       
            criterioDeFiltrosActuales.set("formato", item.innerText)

        }
        else if(item.className == "btnTurno"){
       
            criterioDeFiltrosActuales.set("turno", item.innerText)

        }
        else if(item.className == "btnDia"){
       
            criterioDeFiltrosActuales.set("dia", item.innerText)

        }
        else if(item.className == "btnValor"){
       
            criterioDeFiltrosActuales.set("valor", item.innerText)

        }
        else if(item.className == "btnNivel"){
       
            criterioDeFiltrosActuales.set("nivel", item.innerText)

        }
        
        localStorage.setItem("criterioFiltros", stringifyMapa(criterioDeFiltrosActuales))
    }
    item.addEventListener('click', clickBoton)
    item.addEventListener('click', filtrarClase)

});