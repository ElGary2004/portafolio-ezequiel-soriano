document.getElementById("calculo2").addEventListener("submit", function(event) {
  event.preventDefault();


  var distancia = parseFloat(document.getElementById("distancia").value);
  var tiempo = parseFloat(document.getElementById("tiempo").value);

  if (isNaN(distancia) || isNaN(tiempo)) {
    document.getElementById("resultado").textContent = "Ingrese valores numéricos válidos.";
  } else {
    var velocidad = distancia / tiempo;
    document.getElementById("resultado").textContent = velocidad.toFixed(2) + " metros por minuto"
  }

})
function calcularIVA(dinero) {
  var iva = parseFloat(dinero) * 0.22;
  return iva;
}

function costeTotal(dinero) {
  var iva = parseFloat(dinero) * 0.22;
  var costeTotal = parseFloat(dinero) + (iva);
  return costeTotal;
}

var calcularBotonIva = document.getElementById("calcularIva");
var costeTotalSpan = document.getElementById("costeTotal");
var cantIvaSpan = document.getElementById("cantIva");

calcularBotonIva.addEventListener("click", function() {
  var dinero = document.getElementById("dinero").value;
  var iva = calcularIVA(dinero);
  var coste = costeTotal(dinero);
  cantIvaSpan.textContent = iva + " UYU";
  costeTotalSpan.textContent = coste + " UYU";
})
document.getElementById("formEdad").addEventListener("submit", function(event) {
  event.preventDefault();

  var edad = parseInt(document.getElementById("edad").value);
  var img= document.getElementById("imagenn")

  if (edad >= 0 && edad <= 5) {
    document.getElementById("edadPuesta").textContent = "Eres un bebé. Por lo tanto no sabes hablar ni caminar y tienes una dependencia absoluta de tus padres. Requieres de adultos para la satisfacción de tus necesidades esenciales."
    img.src="/assets/images/bebe.jpg"
  } else if (edad >= 6 && edad <= 11) {
    document.getElementById("edadPuesta").textContent = "Eres un niño. Tu desarrollo implica una serie de aprendizajes que serán claves para tu formación como adulto. En tus primeros años de vida, deberás desarrollar tu lenguaje para después aprender a leer y escribir.";
    img.src="/assets/images/niño.png"
  } else if (edad >= 12 && edad <= 17) {
    document.getElementById("edadPuesta").textContent = "Eres un adolescente. Traes contigo un aumento en la capacidad para el pensamiento abstracto, la visualización del futuro, la empatía y el idealismo. El cuestionamiento de sí mismo y la reproducción.";
    img.src="/assets/images/adole.png"
  } else if (edad >= 18 && edad <= 59) {
    document.getElementById("edadPuesta").textContent = "Eres adulto. Te caracterizas por la responsabilidad: la capacidad y la determinación para dar la respuesta adecuada a cada una de nuestras circunstancias vitales. No somos responsables de lo que nos sucede, pero sí de la forma en que nos relacionamos con lo que nos sucede.";
    img.src="/assets/images/adulto.png"
  } else if (edad >= 60 && edad <= 120) {
    document.getElementById("edadPuesta").textContent = "Eres anciano. Empiezas a notar el peso de los años en tu propio cuerpo. Aparecen arrugas, no cuentas con la misma vitalidad y salud de la juventud. Las funciones y capacidades del organismo empiezan a deteriorarse llegada cierta edad. "
    img.src="/assets/images/anciano.png"
  } else if (edad > 120) {
    document.getElementById("edadPuesta").textContent = "No puedes tener tantos años!!!";
  } else if (isNaN(edad)) {
    document.getElementById("edadPuesta").textContent = "Ingrese valores numéricos válidos.";
  }
});
;