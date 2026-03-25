import { Carro } from "./Carro.js";
import { Moto } from "./Moto.js";

// Carro
let camaro = new Carro(1, "Chevrolet", "Camaro", 100000, 4)
console.log(camaro.exibirDados());
camaro.vender()
console.log(camaro.exibirDados());
camaro.vender()
console.log(camaro.exibirDados());

camaro.setPreco(2000)

let fusca = new Carro(2, "Volkswagen", "Fusca", 10000, 2)
fusca.setPreco(20000)
console.log(fusca.exibirDados());
fusca.vender()
console.log(fusca.exibirDados());
fusca.retornarAoEstoque()
console.log(fusca.exibirDados());

// Moto
let kawasaki = new Moto(3, "Kawasaki", "Moto", 12000, 1999)
console.log(kawasaki.exibirDados());