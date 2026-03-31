function converterVelocidade(valor: number, tipo: string): void {
  if (tipo === "mphParaKmh") {
    let kmh = valor * 1.60934
    console.log(valor + "mph é igual a " + kmh + "km/h")
  }

  if (tipo === "kmhParaMph") {
    let mph = valor / 1.60934
    console.log(valor + "km/h é igual a " + mph + "mph")
  }

  if (tipo === "kmhParaMs") {
    let ms = valor / 3.6
    console.log(valor + "km/h é igual a " + ms + "m/s")
  }

  if (tipo === "msParaKmh") {
    let kmh = valor * 3.6
    console.log(valor + "m/s é igual a " + kmh + "km/h")
  }

  if (tipo === "kmhParaNo") {
    let kt = valor * 0.539957
    console.log(valor + "km/h é igual a " + kt + "kt")
  }

  if (tipo === "noParaKmh") {
    let kmh = valor / 0.539957
    console.log(valor + "kt é igual a " + kmh + "km/h")
  }
}

converterVelocidade(100, "kmhParaMs")