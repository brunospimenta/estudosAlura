const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;

// while(contador <= 2){
    
//    if(listaDeDestinos[contador] == destino){
//        console.log("Destino existe");
//        destinoExiste = true;gi
//        break
//    }
//     contador+= 1;
// }

for(let i=0; i <=2; i++){
    
    if(listaDeDestinos[i] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
     contador+= 1;
 }

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!")
}