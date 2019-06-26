
function exibeMensagem(endereco) {
    return ("O usuário mora em " +
        endereco.cidade +
        " / " +
        endereco.uf +
        ", no bairro " +
        endereco.bairro +
        ', na rua "' +
        endereco.rua +
        '" com nº ' +
        endereco.numero +
        "."
    );
}

var endereco = {
    rua: "Travessa Rio Amazonas",
    numero: 23,
    bairro: "Suburbana",
    cidade: "Salvador",
    uf: "BA"
};

console.log(exibeMensagem(endereco));