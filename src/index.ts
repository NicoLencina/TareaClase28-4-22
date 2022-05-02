let datoBase = document.getElementById("datoBase");
let datoAltura = document.getElementById("datoAltura");
let btnArea = document.getElementById("btnArea");

btnArea.addEventListener("click", () => {
  console.log("El area del rectangulo es", datoBase.value * datoAltura.value);
});
