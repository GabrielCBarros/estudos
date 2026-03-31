function converterPeso(valor: number, tipo: string): void {
  if (tipo === "kgParaLb") {
    let lb = valor * 2.20462
    console.log(valor + "kg é igual a " + lb + "lb")
  }

  if (tipo === "lbParaKg") {
    let kg = valor / 2.20462
    console.log(valor + "lb é igual a " + kg + "kg")
  }
}

converterPeso(10, "kgParaLb")
converterPeso(22, "lbParaKg")