let listaNumeros = [1,2,3];

console.log(listaNumeros[0]);
console.log(listaNumeros[1]);
console.log(listaNumeros[2]);

listaNumeros.push(4);

console.log(listaNumeros)
console.log(listaNumeros.length)

listaNumeros.unshift(0);
console.log(listaNumeros);

listaNumeros.shift()
console.log(listaNumeros)

listaNumeros.pop()
console.log(listaNumeros);

console.log(listaNumeros.indexOf(2));

let listaNomes = ["Maria", "Daniel", "Ana", "Pedro", "João"]

listaNomes.splice(1,1)
console.log(listaNomes)


listaNomes.splice(1,1,"Arthur")
console.log(listaNomes)

listaNomes.splice(0,2,"Maria", "Joana")
console.log(listaNomes)


listaNomes.splice(0,1, "Ronaldo")
console.log(listaNomes)