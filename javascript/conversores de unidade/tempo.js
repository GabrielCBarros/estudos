function converterTempo(valor, tipo) {
  if (tipo === "anoParaDias") {
    let dias = valor * 365
    console.log(valor + " anos é igual a " + dias + " dias")
  }

  if (tipo === "mesParaDias") {
    let dias = valor * 30
    console.log(valor + " meses é igual a " + dias + " dias")
  }

  if (tipo === "diasParaHoras") {
    let horas = valor * 24
    console.log(valor + " dias é igual a " + horas + " horas")
  }

  if (tipo === "horasParaSegundos") {
    let seg = valor * 3600
    console.log(valor + " horas é igual a " + seg + " segundos")
  }

  if (tipo === "segParaMin") {
    let min = Math.floor(valor / 60)
    let resto = valor % 60
    console.log(valor + " segundos são " + min + " minutos e " + resto + " segundos")
  }

  if (tipo === "segParaHoras") {
    let h = Math.floor(valor / 3600)
    let m = Math.floor((valor % 3600) / 60)
    let s = valor % 60
    console.log(valor + " segundos são " + h + "h " + m + "min " + s + "s")
  }

  if (tipo === "segParaDias") {
    let d = Math.floor(valor / 86400)
    let h = Math.floor((valor % 86400) / 3600)
    let m = Math.floor((valor % 3600) / 60)
    let s = valor % 60
    console.log(valor + " segundos são " + d + "d " + h + "h " + m + "min " + s + "s")
  }
}

converterTempo(100000, "segParaDias")