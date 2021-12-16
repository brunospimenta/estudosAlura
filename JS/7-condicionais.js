const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


// console.log("Destinos possiveis:");

// console.log(listaDeDestinos);

// const idadeComprador = 17;
// const estaAcompanhado = true;

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhado) {
//     console.log("Comprador está acompnhado")
//     listaDeDestinos.splice(2, 1); //removendo item
// } else {
//     console.log("Não é maior de idade e não posso vender");
// }


console.log("Destinos possiveis:");

console.log(listaDeDestinos);

const idadeComprador = 18;
const estaAcompanhado = false;
const temPassagemComprada = true;

if (idadeComprador >= 18 || estaAcompanhado == true) {
    
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador < 18);
// console.log(idadeComprador > 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);