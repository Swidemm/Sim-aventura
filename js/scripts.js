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

        alert("Por favor, seleccione una opcion correspondiente")

    }
}

while (Aventura == true) {

    let NombrePersona = prompt( "Por favor, primero indicame tu nombre...")

    let NombrePersonaje = prompt("Genial, ahora por favor, indicame el nombre por el cual te gustaria llamarte en el juego...")
    
    saludajugador(NombrePersona, NombrePersonaje);

    alert("Te encuentras caminando hacia tu casa luego de un largo dia de trabajo, ya hace tiempo que tienes en mente comprar una casa...");

    alert("Derrepente, te encuentras que un nuevo local abrio, 'Proyecto4arq' decides entrar.");

    alert("Te doy la bienvenida, me llamo Ezequiel, ¿Cual es tu nombre?");

    alert("Respondes: Me llamo " + NombrePersonaje + ".");

    alert("Bienvenido/a seas " + NombrePersonaje + " " + "decime, ¿en que puedo ayudarte?");

    alert("Respondes: Deseaba comprar una casa, o un terreno. ¿que opciones tienen disponibles?");

    alert("Excelente, tenemos una amplia variedad de terrrenos y casas prefabricadas, tambien podemos hacerla a medida, pero eso requiere mas tiempo. en el catalogo a tu lado podras elegir el terreno y casa que desees y te dare un aproximado del valor.");

    haceventaterreno();

    alert("Excelente eleccion, el tamaño total es de " + TamañoTotal + " " + "yo te recomendaria una casa " + RecomendacionCasa + " " +  "para aprovechar bien el espacio...");

    alert("Volviendo al terreno, este mismo tiene un valor de " + ValorTerreno + " " + "en mi opinion, te conviene comprar tanto el terreno como la casa prefabricada, ya que las tenemos en descuento!");

    alert("Ahora, vamos por la casa, dime, ¿deseas una prefabricada o quisieras que me comunique contigo para hacer una a medida?") ;

    let TipoCasa = prompt("Me gustaria... \n1. Una casa prefabricada \n2. Que te comuniques conmigo para hacer una a medida");

    if (TipoCasa == 1) {

        ending1();

        ending1post(NombrePersonaje, TamañoTotal, TipoCasaPrefab, Total, NombrePersona);

        break;

    } else if (TipoCasa == 2) {

        ending2();

        ending2post(NombrePersonaje, TamañoTotal, NombrePersona);

        break;

    }
}

// funciones de hola :D

function saludajugador(persona, personaje) {

    alert("¡Bienvenido seas a mi aventura " + persona + " " + "espero que disfrutes esta pequeña experiencia! Veo que tu personaje se llama " + personaje + " " + "este mismo nombre sera utilizado a lo largo de nuestra aventura!")
    alert("¿Preparado? ¡Comencemos! (recuerda que debes responder con el numero de la opcion correspondiente.)")

}

// funciones de venta

function haceventaterreno() {

    let Terreno = prompt ("Por favor, selecciona cual deseas (1, 2 o 3)\n1. Terreno de 9.14m x 28m \n2. Terreno de 12m x 28m \n3. Terreno de 12m x 42.50m");

        if (Terreno == 1) {
            ValorTerreno = 3000;
            TamañoTotal = "335.00m2";
            RecomendacionCasa = "pequeña con un garage lateral o un muy pequeño patio delantero, despues dediciras cual prefieres";
        } else if (Terreno == 2) {
            ValorTerreno = 4000;
            TamañoTotal = "340.00m2";
            RecomendacionCasa = "mediana con garage lateral y un pequeño patio delantero";
        } else if (Terreno == 3) {
            ValorTerreno = 9000;
            TamañoTotal = "510.00m2";
            RecomendacionCasa = "grande con patio delantero y garage lateral";
        }
}

function haceventacasa() {

    let CasaPrefab = prompt("Genial, por favor, selecciona cual deseas (1, 2 o 3) \n1. Prefabricada de lujo \n2. Prefabricada clase media \n3. Prefabricada basica")

        if (CasaPrefab == 1) {
            ValorCasa = 12000;
            TipoCasaPrefab = "de lujo"
        } else if (CasaPrefab == 2) {
            ValorCasa = 9500;
            TipoCasaPrefab = "clase media"
        } else if (CasaPrefab == 3) {
            ValorCasa = 7200;
            TipoCasaPrefab = "basica"
        }

}

// choclo de funciones de final

function ending1() {

    haceventacasa();

    let Total = ValorCasa + ValorTerreno
    
    alert("Asi que una casa " + TipoCasaPrefab + " " + "eh? excelente eleccion! esa misma vale " + ValorCasa + ".")

    alert("Excelente, entonces seria... " + Total + ".")

    alert("Respondes: Genial entonces! ¿Para cuando estaria todo esto?");

    alert("Para aproximadamente 7 dias habiles desde que abonas");

    let ModoPago = prompt("Pago con... \n1. efectivo \n2. debito \n3. credito ");

    let NumeroCelularTotal = prompt("Excelente eleccion, ya mismo te cobro... ¡y listo! Ya es todo tuyo, en los proximos dias habiles me voy a estar comunicando para aclarar los detalles, por favor, dejame tu numero de telefono...");

    alert("Excelente, entonces tu numero es " + NumeroCelularTotal + " " + "¿cierto? Muy bien, me comunicare contigo en los proximos 7 dias habiles, ¡Que te vaya mas que bien!");

    alert("Sales del local, con una sonrisa por la gran atencion y precios, luego de unas cuadras, llegas a tu departamento, ilusionado de haber logrado tener tu propia casa, te acuestas y terminas el dia.");

}
function ending2() {
    
    alert("Genial, por favor anotame tu numero de celular en esta libreta asi me comunico");

    let NumeroCelular = prompt ("Agarras la libreta y escribes tu numero de celular...");

    alert("Excelente, entonces tu numero es " + NumeroCelular + " " + "¿cierto? Muy bien, me comunicare contigo en las proximas 24 horas, ¡Que te vaya mas que bien!");

    alert("Sales del local, con una sonrisa por la gran atencion y precios, luego de unas cuadras, llegas a tu departamento y terminas el dia.");


}

function ending1post(personaje, tamanoterreno, tipoprefab, totalgastado, persona) {

    alert("¡Llegaste al final! ahora, veamos un poco de estadisticas: " + "Tu personaje " + personaje + "compro un terreno de tamaño " + tamanoterreno + " " + "en este mismo, coloco una casa prefabricada " + tipoprefab + " " + "gastando un total de: " + totalgastado + " " + "¡Felicidades! Tienes tu casa de ensueño.")

    alert("¡Muchisimas gracias por jugar mi aventura! " + persona + " " + "Se vienen expansiones a la historia, con multiples finales y mayor interactividad!")

}

function ending2post(personaje, tamanoterreno, persona) {

    alert("¡Llegaste al final! ahora, veamos un poco de estadisticas: " + "Tu personaje " + personaje + "compro un terreno de tamaño " + tamanoterreno + " " + "sin embargo, decidio no comprar una casa prefabricada, sino que armar la suya propia.")
    
    alert("¡Muchisimas gracias por jugar mi aventura! " + persona + " " + "Se vienen expansiones a la historia, con multiples finales y mayor interactividad!")

}