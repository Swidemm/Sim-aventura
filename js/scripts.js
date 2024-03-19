// carrito de compras, recontra WIP, no me pidas mucho mas

// Definición de los productos disponibles con sus nombres y precios, usa arrays (te amo y odio arrays)
const mueble = [
    { nombre: "ropero", precio: 14500 },
    { nombre: "mesa", precio: 16500 },
    { nombre: "escritorio", precio: 20000 },
    { nombre: "sillon", precio: 16000 },
    { nombre: "sillon doble", precio: 25500 },
    { nombre: "cama simple", precio: 17800 },
    { nombre: "cama doble", precio: 28480 },
    { nombre: "estanteria", precio: 21000 }
];


 // inicializacion del carrito de compras vacio
let carrito = [];
let total = 0;

// Funcion para mostrar los productos y seleccionarlos (al borde de la embolia con esto)
function mostrarProductos() {

    // crea la lista de productos, sacandolos del array de arriba
    let listaProductos = "Productos disponibles:\n";
    mueble.forEach((producto, index) => {
        listaProductos += `${index + 1}: ${producto.nombre} - $${producto.precio}\n`;
    });

    // Bucle para delirar la tarjeta de credito hasta que se aprete cancelar
    while (true) {

        let seleccion = prompt(listaProductos + "\nIngrese el numero de producto que desea, al contrario, presione cancelar para terminar la venta.");

        // si se cancela, sale del bucle
        if (seleccion === null) {
            break;
        }

        // convierte la eleccion a un indice de producto
        let productoIndex = parseInt(seleccion) - 1;

        // creo que verifica si el indice esta dentro de los productos disponibles, creo que funciona, no tengo idea la verdad, por las dudas lo dejo
        if (productoIndex >= 0 && productoIndex < mueble.length) {
            // obtiene el producto elegido
            let productoSeleccionado = mueble[productoIndex];
            // lo agrega al carrito
            carrito.push(productoSeleccionado);
            // suma el precio
            total += productoSeleccionado.precio;
            // muestra un mensaje de lo que se agrego y el total nuevo
            alert(`Agregado ${productoSeleccionado.nombre} al carrito. Total: $${total}`);
        } else {
            // Si se pone cualquier cosa da este error
            alert("Por favor, selecciona un producto valido.");
        }
    }
    console.log(carrito)
    // debugging, porque el carrito me tenia harto de no funcionar

    // una vez terminado todo, se muestra un resumen de la venta
    mostrarResumen(carrito, total);
}

// Función para mostrar un resumen de la compra al cliente
function mostrarResumen(carrito, total) {
    // Crear una cadena para almacenar el resumen
    let resumen = "Resumen de la compra:\n\n";

    // Iterar sobre los productos en el carrito
    carrito.forEach(producto => {
        // Agregar el nombre y el precio de cada producto al resumen
        resumen += `${producto.nombre}: $${producto.precio}\n`;
    });

    // Agregar el total al resumen
    resumen += `\nTotal: $${total}`;

    // Mostrar el resumen al cliente en un mensaje de alerta
    alert(resumen);
}

// Inicio de funciones

// funciones de hola :D

function saludajugador(persona, personaje) {

    alert("¡Bienvenido seas a mi aventura " + persona + " " + "espero que disfrutes esta pequeña experiencia! Veo que tu personaje se llama " + personaje + " " + "este mismo nombre sera utilizado a lo largo de nuestra aventura!");
    
    alert("¿Preparado? ¡Comencemos! (recuerda que debes responder con el numero de la opcion correspondiente.)");

}

// funciones de venta

function haceventaterreno() {
    let Terreno = prompt ("Por favor, selecciona cual deseas (1, 2 o 3)\n1. Terreno de 9.14m x 28m \n2. Terreno de 12m x 28m \n3. Terreno de 12m x 42.50m");

    // control de errores para que el usuario elija la opcion correcta
    while (Terreno !== "1" && Terreno !== "2" && Terreno !== "3") {
        // Muestra las opciones nuevamente
        Terreno = prompt("Por favor, selecciona una opción válida (1, 2 o 3)\n1. Terreno de 9.14m x 28m \n2. Terreno de 12m x 28m \n3. Terreno de 12m x 42.50m");
    }

    if (Terreno === "1") {
        ValorTerreno = 3000;
        TamanoTotal = "335.00m2";
        RecomendacionCasa = "pequeña con un garage lateral o un muy pequeño patio delantero, después decidirás cuál prefieres";
    } else if (Terreno === "2") {
        ValorTerreno = 4000;
        TamanoTotal = "340.00m2";
        RecomendacionCasa = "mediana con garage lateral y un pequeño patio delantero";
    } else if (Terreno === "3") {
        ValorTerreno = 9000;
        TamanoTotal = "510.00m2";
        RecomendacionCasa = "grande con patio delantero y garage lateral";
    }
}


function haceventacasa() {

    let CasaPrefab = prompt ("Por favor, selecciona cual deseas (1, 2 o 3)\n1. Prefabricada de lujo \n2. Prefabricada clase media \n3. Prefabricada básica");

    // control de errores para que el usuario elija la opcion correcta
    while (CasaPrefab !== "1" && CasaPrefab !== "2" && CasaPrefab !== "3") {
        // Muestra las opciones nuevamente
        CasaPrefab = prompt("Por favor, selecciona una opción válida (1, 2 o 3)\n1. Prefabricada de lujo \n2. Prefabricada clase media \n3. Prefabricada básica");
    }

    if (CasaPrefab === "1") {
        ValorCasa = 12000;
        TipoCasaPrefab = "de lujo";
    } else if (CasaPrefab === "2") {
        ValorCasa = 9500;
        TipoCasaPrefab = "clase media";
    } else if (CasaPrefab === "3") {
        ValorCasa = 7200;
        TipoCasaPrefab = "básica";
    }
}

// Funciones creadas con el motivo de continuar el final 2
let Preciototal
let ColorCasa
let TipoTam
let MaterialCasa
// entiendo por que necesito declararlas fuera de la funcion, no entiendo por que en otros casos no necesite hacerlo, en todo caso, funciona, no pregunto ni toco mas
function crearcasa() {
    MaterialCasa = prompt("Genial entonces, comencemos con el tipo de material principal de la casa\n1. Ladrillo \n2. Placa de yeso \n3. Concreto")

    while (MaterialCasa !== "1" && MaterialCasa !== "2" && MaterialCasa !== "3") {
        // Muestra las opciones nuevamente
        MaterialCasa = prompt("Por favor, selecciona una opción válida (1, 2 o 3) \n1. Ladrillo \n2. Placa de yeso \n3. Concreto");
    }

    if (MaterialCasa === "1") {
        ValorMat = 19760;
        TipoMaterial = "ladrillo";
    } else if (MaterialCasa === "2") {
        ValorMat = 13950;
        TipoMaterial = "placa de Yeso";
    } else if (MaterialCasa === "3") {
        ValorMat = 27520;
        TipoMaterial = "concreto";
    }

    TamanoCasa = prompt("Muy bien, continuemos con el tamaño de la casa, por ahora vamos a hacer algo mas ambiguo, luego veremos bien las medidas\n1. Pequeña \n2. Mediana \n3. Grande")
 
    while (TamanoCasa !== "1" && TamanoCasa !== "2" && TamanoCasa !== "3") {
        // Muestra las opciones nuevamente
        TamanoCasa = prompt("Por favor, selecciona una opción válida (1, 2 o 3) \n1. Pequeña \n2. Mediana \n3. Grande");
    }

    if (TamanoCasa === "1") {
        ValorTam = 15000;
        TipoTam = "pequeña";
    } else if (TamanoCasa === "2") {
        ValorTam = 11000;
        TipoTam = "mediana";
    } else if (TamanoCasa === "3") {
        ValorTam = 32000;
        TipoTam = "grande";
    }

    do {
        ColorCasa = prompt("y por ultimo, dime el color principal de la casa, mas adelante podremos hacer varios colores si asi lo deseas")
    } while (!ColorCasa || ColorCasa.length < 3)

    Preciototal= ValorTam + ValorMat + ValorTerreno

    console.log("el total es de: " + Preciototal)
    // debugging
    console.log("la casa es de " + TipoMaterial + ", de tamaño " + TipoTam + " " + "y de un valor total de " + Preciototal)

    pasolimpio(TipoMaterial, TipoTam, ColorCasa, Preciototal)

}

function creacasaobj() {
    class CasaPersonalizada {
        constructor(material, tamano, color) {
            this.material = material;
            this.tamano = tamano;
            this.color = color;
        }
    }
    const CasaPersonalizada1 = new CasaPersonalizada(TipoMaterial, TipoTam, ColorCasa)
    console.log(CasaPersonalizada1)
    // debugging
}

function pasolimpio(mat, tam, col, pre) {
    alert("Muy bien... entonces, pasemos en limpio. El material principal de la casa va a ser " + mat + ", de tamaño " + tam + ", y el color que elegiste es " + col + ", me gusta! El valor total de la misma es: " + pre + " " + "Ya mismo me pongo a hacer los planos y me comunico nuevamente para terminar detalles, a continuacion, te dejare un pequeño catalogo de muebles, ¡puedes comprar el que quieras y cuantos quieras! obvio, siempre y cuando puedas costearlo ja ja ja.")
}

// Funciones de final

function ending1post(personaje, tamanoterreno, tipoprefab, totalgastado, persona) {

    alert("¡Llegaste al final! ahora, veamos un poco de estadisticas: " + "Tu personaje " + personaje + " " + "compro un terreno de tamaño " + tamanoterreno + " " + "en este mismo, coloco una casa prefabricada " + tipoprefab + " " + "gastando un total de: " + totalgastado + " " + "¡Felicidades! Tienes tu casa de ensueño.");

    alert("¡Muchisimas gracias por jugar mi aventura! " + persona + ", " + "se vienen expansiones a la historia, con multiples finales y mayor interactividad!");
}

function ending2post(personaje, tamanoterreno, matecasa, tamanocasa, casacolor, gastototal, persona) {

    alert("¡Llegaste al final! ahora, veamos un poco de estadisticas: " + "Tu personaje " + personaje + " " + "compro un terreno de tamaño " + tamanoterreno + ", " + "en este mismo, decidio hacer una casa personalizada, esta misma es de material " + matecasa + ", " + "de un tamaño " + tamanocasa + ", " + "de color " + casacolor + ", el costo total de todo fue de " + gastototal );
    
    alert("¡Muchisimas gracias por jugar mi aventura! " + persona + ", " + "se vienen expansiones a la historia, con multiples finales y mayor interactividad!");
}
// Milton te aviso que las funciones de ending se llevaron parte de mi sanidad mental, no se por QUE no funcionaban, ahora funcionan, no las toco mas


// Final de funciones
// inicio de aventura

while (true) {
    let Confirmacion = prompt("Bienvenido, deseas jugar?  \n1. Si \n2. No");
    if (Confirmacion == 1) {
        Aventura = true;
        break;
    } else if (Confirmacion == 2) {
        alert("Que lastima...")
        Aventura = false;
        break;
    } else {
        alert("Por favor, seleccione una opcion correspondiente");
    }
}

// no se si lo de arriba es lo mejor para arrancar el juego, pero funciona, asi que no voy a hacer mas preguntas

while (Aventura === true) {

    let NombrePersona;

    do {
        NombrePersona = prompt("Por favor, primero indícame tu nombre...");
        // !/^[a-zA-Z]+$/.test() es un codigo para que el usuario solamente pueda ingresar un nombre valido, sin letras.
    } while (!NombrePersona || !/^[a-zA-Z]+$/.test(NombrePersona) || NombrePersona.length < 3);
    // Codigo para que el nombre ingresado siempre tenga la primer letra mayuscula y lo demas minuscula
    NombrePersona = NombrePersona.charAt(0).toUpperCase() + NombrePersona.slice(1).toLowerCase();

    console.log("Nombre ingresado: " + NombrePersona); 
    // existe para debuggear

    let NombrePersonaje;

    do {
        NombrePersonaje = prompt("Genial, ahora por favor, indícame el nombre por el cual te gustaría llamarte en el juego...");
        // !/^[a-zA-Z]+$/.test() es un codigo para que el usuario solamente pueda ingresar un nombre valido, sin letras.
    } while (!NombrePersonaje || !/^[a-zA-Z]+$/.test(NombrePersonaje) || NombrePersonaje.length < 4);
    // Codigo para que el nombre ingresado siempre tenga la primer letra mayuscula y lo demas minuscula
    NombrePersonaje = NombrePersonaje.charAt(0).toUpperCase() + NombrePersonaje.slice(1).toLowerCase();
    
    console.log("Nombre del personaje ingresado: " + NombrePersonaje); 
    // existe para debuggear
    
    saludajugador(NombrePersona, NombrePersonaje);

    alert("Te encuentras caminando hacia tu casa luego de un largo dia de trabajo, ya hace tiempo que tienes en mente comprar una casa...");

    alert("Derrepente, te encuentras que un nuevo local abrio, 'Proyecto4arq' decides entrar.");

    alert("Te doy la bienvenida, me llamo Ezequiel, ¿Cual es tu nombre?");

    alert("Respondes: Me llamo " + NombrePersonaje + ".");

    alert("Bienvenido/a seas " + NombrePersonaje + " " + "decime, ¿en que puedo ayudarte?");

    alert("Respondes: Deseaba comprar una casa, o un terreno. ¿que opciones tienen disponibles?");

    alert("Excelente, tenemos una amplia variedad de terrrenos y casas prefabricadas, tambien podemos hacerla a medida, pero eso requiere mas tiempo. en el catalogo a tu lado podras elegir el terreno y casa que desees y te dare un aproximado del valor.");

    haceventaterreno();

    console.log("el valor del terreno es: " + ValorTerreno)
    // debugging, ya estoy cansado jefe

    console.log("tamaño de terreno seleccionado: " + TamanoTotal + ", " + "de valor " + ValorTerreno); 
    // existe para debuggear

    alert("Excelente eleccion, el tamaño total es de " + TamanoTotal + " " + "yo te recomendaria una casa " + RecomendacionCasa + " " +  "para aprovechar bien el espacio...");

    alert("Volviendo al terreno, este mismo tiene un valor de " + ValorTerreno + " " + "en mi opinion, te conviene comprar tanto el terreno como la casa prefabricada, ya que las tenemos en descuento!");

    alert("Ahora, vamos por la casa, dime, ¿deseas una prefabricada o quisieras que me comunique contigo para hacer una a medida?") ;


    let TipoCasa = prompt("Me gustaría... \n1. Una casa prefabricada \n2. Que te comuniques conmigo para hacer una a medida");

        // Valida la entrada de usuario y repite el prompt si es necesario
        while (TipoCasa !== "1" && TipoCasa !== "2") {
            TipoCasa = prompt("Por favor, selecciona una opción válida: \n1. Una casa prefabricada \n2. Que te comuniques conmigo para hacer una a medida");
        }
        
    if (TipoCasa == 1) {
        
        haceventacasa();

        console.log("Tipo de casa seleccionada: " + TipoCasaPrefab + ", " + "de valor " + ValorCasa); 
        // existe para debuggear

        let Montototal = ValorCasa + ValorTerreno;
        console.log("El monto total es: " + Montototal)
    
        alert("Asi que una casa " + TipoCasaPrefab + " " + "eh? excelente eleccion! esa misma vale " + ValorCasa + ".");
    
        alert("Excelente, entonces seria... " + Montototal + ".");
    
        alert("Respondes: Genial entonces! ¿Para cuando estaria todo esto?");
    
        alert("Para aproximadamente 7 dias habiles desde que abonas");

        let Pago;

        do {
            Pago = prompt("Pago con... \n1. efectivo \n2. débito \n3. crédito");
        } while (Pago !== "1" && Pago !== "2" && Pago !== "3");
        
        switch (Pago) {
            case "1":
                console.log("Pago en efectivo");
                break;
            case "2":
                console.log("Pago con débito");
                break;
            case "3":
                console.log("Pago con crédito");
                break;
        }
    
        let NumeroCelularTotal;

        do {
            NumeroCelularTotal = prompt("Excelente elección, ya mismo te cobro... ¡y listo! Ya es todo tuyo, en los próximos días hábiles me voy a estar comunicando para aclarar los detalles. Por favor, déjame tu número de teléfono:");
        } while (isNaN(NumeroCelularTotal) || NumeroCelularTotal.length < 4);
        
        console.log("Numero de celular ingresado:" + " " + NumeroCelularTotal); 
        // existe para debuggear
    
        alert("Excelente, entonces tu numero es " + NumeroCelularTotal + " " + "¿cierto? Muy bien, me comunicare contigo en los proximos 7 dias habiles, ¡Que te vaya mas que bien!");
    
        alert("Sales del local, con una sonrisa por la gran atencion y precios, luego de unas cuadras, llegas a tu departamento, ilusionado de haber logrado tener tu propia casa, te acuestas y terminas el dia.");

        alert("... Pasan las horas, duermes placidamente, hasta que el fuerte sonido de tu telefono te despierta, te estan llamando...")

        alert("*atiendes* ¿Hola? Quien habla?")

        alert(NombrePersonaje + " " + "soy yo! Ezequiel, te llamaba para ofrecerte muebles para tu casa! que te parece?")

        alert("Respondes: Muy bien, los voy a necesitar, veamos que tenes...")

        alert("Genial " + NombrePersonaje + "! " + "Ya mismo me dirijo para tu departamento y lo vemos...")

        alert("*pasa media hora, suena el timbre, abres y te encuentras con Ezequiel.*")

        alert("¡" + NombrePersonaje + "! " + "que bueno verte, te doy el catalogo, por favor, miralo tranquilo y elegi lo que mas te guste!")

        mostrarProductos()

        alert("Es-pec-ta-cu-lar, ahora, ¿como pagaras todo esto?")

        do {
            Pago = prompt("Pago con... \n1. efectivo \n2. débito \n3. crédito");
        } while (Pago !== "1" && Pago !== "2" && Pago !== "3");
        
        switch (Pago) {
            case "1":
                console.log("Pago en efectivo");
                break;
            case "2":
                console.log("Pago con débito");
                break;
            case "3":
                console.log("Pago con crédito");
                break;
        }

        alert("Muy bien! ya mismo te cobro... y estamos! ya te cobre dos veces eh? que vendedor ja ja ja, muy bien " + NombrePersonaje + " " + "nos estamos viendo, te comunicare cuando ya la casa este colocada y amueblada, un saludo!")

        let PrecioAbsoluto =  Montototal + total

        ending1post(NombrePersonaje, TamanoTotal, TipoCasaPrefab, PrecioAbsoluto, NombrePersona);

        break;

    } else if (TipoCasa == 2) {

        alert("Genial, por favor anotame tu numero de celular en esta libreta asi me comunico");

        let NumeroCelular;

        do {
            NumeroCelular = prompt("Agarras la libreta y escribes tu numero de celular...");
        } while (isNaN(NumeroCelular) || NumeroCelular.length < 4);

        console.log("Numero de celular ingresado:" + " " + NumeroCelular); 
        // existe para debuggear
    
        alert("Excelente, entonces tu numero es " + NumeroCelular + " " + "¿cierto? Muy bien, me comunicare contigo en las proximas 24 horas, ¡Que te vaya mas que bien!");
    
        alert("Sales del local, con una sonrisa por la gran atencion y precios, luego de unas cuadras, llegas a tu departamento y terminas el dia.");

        alert("... Pasan las horas, duermes placidamente, hasta que el fuerte sonido de tu telefono te despierta, te estan llamando...")

        alert("*atiendes* ¿Hola? Quien habla?")

        alert(NombrePersonaje + " " + "soy yo! Ezequiel, te llamaba para ya ponernos en marcha con ciertos datos para la casa, ¿te parece?")

        crearcasa()

        mostrarProductos()

        alert("Es-pec-ta-cu-lar, ahora, ¿como pagaras todo esto?")

        do {
            Pago = prompt("Pago con... \n1. efectivo \n2. débito \n3. crédito");
        } while (Pago !== "1" && Pago !== "2" && Pago !== "3");
        
        switch (Pago) {
            case "1":
                console.log("Pago en efectivo");
                break;
            case "2":
                console.log("Pago con débito");
                break;
            case "3":
                console.log("Pago con crédito");
                break;
        }
    

        let PrecioAbsoluto = Preciototal + ValorTerreno + total
        
        console.log("el absoluto es de: " + PrecioAbsoluto)

        ending2post(NombrePersonaje, TamanoTotal, TipoMaterial, TipoTam, ColorCasa, PrecioAbsoluto, NombrePersona);

        break;
    }
}
// Zona de tips, si queres dejarme algun tip, ponelo abajo de esto jeje