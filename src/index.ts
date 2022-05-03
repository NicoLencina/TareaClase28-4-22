//defino las variables y acedo a HTML con "document.getElementById" llamandolo por su id

let datoBase = document.getElementById("base");  
let datoAltura = document.getElementById("altura");
let buttonArea = document.getElementById("buttonArea");

//vinculo clik con buton  y luego imprimo por consola

buttonArea.addEventListener("click", () => {
  console.log("El area del rectangulo es", (datoBase.value * datoAltura.value);
});
