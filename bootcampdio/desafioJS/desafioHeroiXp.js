let nome = "aigon";
let xp = 8727;

let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Diamante", "Ascendente", "Imortal", "Radiante" ];
let niivel = "";

for (let i = 0; i < niveis; i++){
    let limiteInferior = i * 1000;
    let limiteSuperior = (i + 1) * 1000;

    if (xp >= limiteInferior && xp <limiteSuperior){
        nivel = niveis[i];
    }
}

if (xp >= 10000){
    nivel = "Radiante";

}

console.log("O Herói de nome " + nome + " está no nivel" + nivel + "com" + xp + "de xp.");
