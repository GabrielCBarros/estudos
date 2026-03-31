function converterVolume(valor: number, tipo: string): void {
  if (tipo === "lParaGal") {
    let gal = valor * 0.264172
    console.log(valor + "L é igual a " + gal + "gal")
  }

  if (tipo === "galParaL") {
    let l = valor / 0.264172
    console.log(valor + "gal é igual a " + l + "L")
  }

  if (tipo === "mlParaOz") {
    let oz = valor * 0.033814
    console.log(valor + "ml é igual a " + oz + "oz")
  }

  if (tipo === "ozParaMl") {
    let ml = valor / 0.033814
    console.log(valor + "oz é igual a " + ml + "ml")
  }

  if (tipo === "lParaM3") {
    let m3 = valor / 1000
    console.log(valor + "L é igual a " + m3 + "m³")
  }

  if (tipo === "m3ParaL") {
    let l = valor * 1000
    console.log(valor + "m³ é igual a " + l + "L")
  }

  if (tipo === "lParaCm3") {
    let cm3 = valor * 1000
    console.log(valor + "L é igual a " + cm3 + "cm³")
  }

  if (tipo === "cm3ParaL") {
    let l = valor / 1000
    console.log(valor + "cm³ é igual a " + l + "L")
  }

  if (tipo === "mlParaCm3") {
    console.log(valor + "ml é igual a " + valor + "cm³")
  }
}

converterVolume(10, "lParaGal")