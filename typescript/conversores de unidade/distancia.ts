function converterDistancia(valor: number, tipo: string): void {
  if (tipo === "kmParaMi") {
    let mi = valor * 0.621371
    console.log(valor + "km é igual a " + mi + "mi")
  }

  if (tipo === "miParaKm") {
    let km = valor / 0.621371
    console.log(valor + "mi é igual a " + km + "km")
  }

  if (tipo === "mParaJarda") {
    let yd = valor * 1.09361
    console.log(valor + "m é igual a " + yd + "yd")
  }

  if (tipo === "jardaParaM") {
    let m = valor / 1.09361
    console.log(valor + "yd é igual a " + m + "m")
  }

  if (tipo === "mParaPes") {
    let ft = valor * 3.28084
    console.log(valor + "m é igual a " + ft + "ft")
  }

  if (tipo === "pesParaM") {
    let m = valor / 3.28084
    console.log(valor + "ft é igual a " + m + "m")
  }

  if (tipo === "cmParaPol") {
    let pol = valor * 0.393701
    console.log(valor + "cm é igual a " + pol + "pol")
  }

  if (tipo === "polParaCm") {
    let cm = valor / 0.393701
    console.log(valor + "pol é igual a " + cm + "cm")
  }
}

converterDistancia(10, "kmParaMi")