function hanker(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "ferro";

    } else if (vitorias >= 11 && vitorias <= 20){
        nivel = "bronze";
    } else if (vitorias >= 21 && vitorias <= 50){
        nivel = "prata";
    } else if (vitorias >= 51 && vitorias <= 80){
        nivel = "ouro";
    } else if (vitorias >= 81 && vitorias <= 90){
        nivel = "diamante";
    } else if (vitorias >= 91 && vitorias <= 100){
        nivel = "lendario";
    } else if (vitorias >= 101){
        nivel = "imortal";
    }    
    return 'O heroi tem de saldo de ${saldoVitorias} esta no nivel de ${nivel}';
    
}
let jogadores = [
    { vitorias: 5, derrotas: 3},
    { vitorias: 15, derrotas: 6},
    { vitorias: 55, derrotas: 20},
    { vitorias: 120, derrotas: 50},

];

for (let i = 0; i < jogadores.length; i++) {
    console.log(calcularrank(jogadores[i].vitorias, jogadores[i].derrotas));
}