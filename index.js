let nota = 0
let prom = 0
let cant = 0

do {
    cant++;
    prom+=parseFloat(nota)
    nota =parseFloat(prompt("Ingrese una nota(ESC para finalizar)", ""))

} while(nota != "ESC")
alert("El promedio es de "+ prom/cant)