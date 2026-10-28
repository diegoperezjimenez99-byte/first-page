// === 1. JUEGO: ADIVINA MI NÚMERO FAVORITO ===
const numeroInput = document.getElementById("numeroInput");
const mensajeNumero = document.getElementById("mensajeNumero");
const numeroFavorito = 43;

numeroInput.addEventListener("input", function() {
    let valor = Number(numeroInput.value);

    if (numeroInput.value === "") {
        mensajeNumero.textContent = "";
        return;
    }

    if (valor < numeroFavorito) {
        mensajeNumero.textContent = "Estás por debajo de mi número favorito";
        mensajeNumero.style.color = "#d97706"; // Color naranja
    } else if (valor > numeroFavorito) {
        mensajeNumero.textContent = "Te pasaste";
        mensajeNumero.style.color = "#dc2626"; // Color rojo
    } else {
        mensajeNumero.textContent = "¡Correcto! El 43 es mi número favorito";
        mensajeNumero.style.color = "#16a34a"; // Color verde
    }
});


// === 2. SELECTOR CON TEXTO E IMAGEN DINÁMICA ===
const gustosSelect = document.getElementById("gustosSelect");
const textoGusto = document.getElementById("textoGusto");
const imagenGusto = document.getElementById("imagenGusto");

gustosSelect.addEventListener("change", function() {
    let opcion = gustosSelect.value;

    if (opcion === "serie") {
        textoGusto.textContent = "Mi serie favorita es: Avatar, la leyenda de Aang";
        imagenGusto.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdq4JM76EqSpon5wdubfgH4djTVLyYOtwyZ0qMKStvda8Ngd4743zH65-&s=10";
        imagenGusto.style.display = "inline-block";
    } else if (opcion === "lugar") {
        textoGusto.textContent = "Mi lugar favorito: Un mirador con un ambiente frío";
        imagenGusto.src = "https://viajala.com.co/news/wp-content/uploads/2025/12/Marulanda-Caldas-turismo.jpg";
        imagenGusto.style.display = "inline-block";
    } else if (opcion === "trabajo") {
        textoGusto.textContent = "Mi trabajo soñado: Automatización de equipos industriales que paguen más de 30M al mes";
        imagenGusto.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400";
        imagenGusto.style.display = "inline-block";
    } else {
        textoGusto.textContent = "Selecciona una opción";
        imagenGusto.src = "https://media.istockphoto.com/id/1405983081/es/vector/hombre-de-negocios-en-una-encrucijada-de-ilustraci%C3%B3n-vectorial-plana.jpg?s=612x612&w=0&k=20&c=2NckQQva12cXGcsq7_PC8qsFwt55J-OGbeEIyyt2984=";
        imagenGusto.style.display = "inline-block";
    }
});


// === 3. BOTÓN DE ALERTA ===
const btnAlerta = document.getElementById("btnAlerta");

btnAlerta.addEventListener("click", function() {
    alert("Hey, profe, ¿Va a ayudar a conseguir patrocinio?");
});