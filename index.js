let nota = 0
let prom = 0
let cant = 0

do {
    cant++;
    prom+=parseFloat(nota)
    nota =parseFloat(prompt("Ingrese una nota(-1 para ver la nota)", ""))

} while(nota != "-1")
alert("El promedio es de "+ prom/cant)