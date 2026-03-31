function converterTemperatura(valor, tipo) {
  if (tipo === "CparaF") {
    let f = (valor * 9/5) + 32
    console.log(valor + "°C é igual a " + f + "°F")
  }
}

converterTemperatura(30, "CparaF")