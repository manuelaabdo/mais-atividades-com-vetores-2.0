let nome = [];
let sexo = [];
let salario = [];


let nomesMulheres = [];
let sexoF = [];
let salarioMulheres = [];
let contador = 0;

for (let i = 0; i < 5; i++) {
    nome[i] = prompt(`Insira o nome da ${i+1}º pessoa:`);
    sexo[i] = prompt(`Insira o sexo (F, M ou outro) de ${nome[i]}:`);
    salario[i] = Number(prompt(`Insira o salário de ${nome[i]}`));
}

for (let i = 0; i < 5; i++) {
    if (sexo[i] === "F" && salario[i] > 5000) {
        nomesMulheres[contador] = nome[i];
        sexoF[contador] = sexo[i];
        salarioMulheres[contador] = salario[i]
        contador++
    }
}

let listagem = "--- DADOS DAS MULHERES QUE GANHAM MAIS DE 5000 REAIS---\n";

if (contador === 0) {
    listagem += "Nenhuma mulher foi cadastrada.";
} else {
    for (let i = 0; i < contador; i++) {
        listagem += `Nome: ${nomesMulheres[i]} // Sexo: ${sexoF[i]} // Salário: ${salarioMulheres[i]} \n`
    }
} 
alert(listagem)
