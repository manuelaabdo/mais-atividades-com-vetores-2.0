let nomes = [];
let alturas = [];
let contador = 0;
let resposta = "S";

while (resposta === "S" || resposta === "s") {
    nomes[contador] = prompt(`Insira o nome da ${contador + 1}ª pessoa:`);
    alturas[contador] = Number(prompt(`Insira a altura de ${nomes[contador]} (em centímetros, ex: 175):`));
    contador++;
    resposta = prompt("Deseja cadastrar mais alguém? (S ou N)")
}

let maiorAltura = alturas[0];
let nomeDoMaisAlto = nomes[0];

let menorAltura = alturas[0];
let nomeDoMaisBaixo = nomes[0];

for (let i = 1; i < contador; i++) {
    if (alturas[i] > maiorAltura) {
        maiorAltura = alturas[i];
        nomeDoMaisAlto = nomes[i];
    }
    
    if (alturas[i] < menorAltura) {
        menorAltura = alturas[i];
        nomeDoMaisBaixo = nomes[i];
    }
}

alert(
    `--- RESULTADOS FINAIS ---\n
    Maior altura: ${maiorAltura}m (Pertence a: ${nomeDoMaisAlto})\n 
    Menor altura: ${menorAltura}m (Pertence a: ${nomeDoMaisBaixo})`
);
