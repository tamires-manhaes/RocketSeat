

var tarefa = document.querySelector('input[name=tarefa]');
var adicionar = document.querySelector('button.btnAdicionar');

adicionar.onclick = function() {
    var todo = tarefa.value;
    console.log(todo)
    var ul = document.getElementById("todo-list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todo));
    ul.appendChild(li);
}