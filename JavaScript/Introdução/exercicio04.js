function experiencia(anos) {
    if(anos <= 1){
        return "Iniciante";
    } else if (anos <= 3){
        return "Intermediario";
    } else if (anos <= 6 ){
        return "Avançado";
    } else if (anos > 6 ){
        return "Jedi Master";
    } else {
        return "Sei lá fio"
    }
}

var anosEstudo = 7;
console.log(experiencia(anosEstudo));