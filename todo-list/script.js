
var lista = document.querySelector('#todo-list');
var tarefa = document.querySelector('input[name=tarefa]');
var adicionar = document.querySelector('button.btnAdicionar');

var to_dos = [ ];

function iniciarToDos(){
    lista.innerHTML = '';

    for (todo of to_dos){
        var todoElement = document.createElement('li');
        var todoTexto = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var index = to_dos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteToDo('+ index +')');

        var linkText = document.createTextNode('X');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoTexto)
        todoElement.appendChild(linkElement);

        lista.appendChild(todoElement);
    }
}

iniciarToDos();

function addTodo(){
    var todoText = tarefa.value;

    to_dos.push(todoText);
    tarefa.value = '';
    iniciarToDos();
}

adicionar.onclick = addTodo;

function deleteToDo(index){
    to_dos.splice(index, 1);
    iniciarToDos();
}

