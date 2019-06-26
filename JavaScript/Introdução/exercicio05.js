function exibeHabilidades(usuarios) {
    for (usuario of usuarios) {
      console.log(
          usuario.nome +
          " possui as habilidades: " +
          usuario.habilidades.join(", ")
      );
    }
}

var usuarios = [  
    {   nome: "Tamires",    
        habilidades: ["Javascript", "HTML", "CSS"]  
    },  
    {   nome: "Marcos",    
        habilidades: ["C#", ".NET", "SQL"]  
    }
];

exibeHabilidades(usuarios);