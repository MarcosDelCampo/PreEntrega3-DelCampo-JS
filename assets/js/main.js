let clases = [];

fetch("./assets/js/clases.json")
    .then(rta => rta.json())
    .then(datos => (clases = datos))

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
    
    resultado.length ? infoClases(resultado) : noHayClases()
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