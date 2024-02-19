alert("Lol, yae >:O");
numeroMaximo = 100;
let numeroSecreto = Math.round(1 + Math.random() * (numeroMaximo - 1));
let valor = prompt("Escolha um número entre 1 e " + String(numeroMaximo) + ".");

if (numeroSecreto == valor){
    alert("boa :o");
}
else{
    alert("erro kkj, era " + numeroSecreto);
}