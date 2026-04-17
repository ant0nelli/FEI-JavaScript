// 1 - Soma
function somaArray(vetor){

    let soma = 0;
    for (let i = 0; i < vetor.length; i++){
        soma += vetor[i];
    }
    return soma;

}

// 2 - Média
function media(vetor){
    let soma = 0;
    for (let i = 0; i < vetor.length; i++){
        soma += vetor[i];
    }
    return (soma / vetor.length);
}

// 3 - Menor elemento
function menorElemento (vetor){
    let menor = vetor[0];
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] < menor){
            menor = vetor[i];
        }
    }
    return menor;
}

// 4 - Medalha de prata
function prata(vetor){
    let maior = vetor[0];
    let prata = 0;
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > maior){
            prata = maior;
            maior = vetor[i];
            
        }
    
    }
    console.log(maior);
    return prata;
    
} 