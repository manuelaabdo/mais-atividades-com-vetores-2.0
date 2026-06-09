let idades = [];

for (let i = 0; i < 4; i++) {
    idades[i] = Number(prompt(`Insira a idade da ${i+1}ª pessoa:`));
}

let maiorIdade = idades[0];
let posicaoMaior = 0;

for (let i = 0; i < 4; i++) {
    if  (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        posicaoMaior = i;
    }
}

alert(`A maior idade digitada foi: ${maiorIdade} anos.
Essa idade foi digitada na posição ${posicaoMaior}.`)
