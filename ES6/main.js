// Classes e Objetos

class TodoList{
    constructor(){
        this.todos = [];
    }

    addTodo(todo){
        this.todos.push(todo);
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function (){
    const todo = document.getElementById('todo').value;
    console.log(todo);
    MinhaLista.addTodo(todo);
}

// manipulando Arrays

const array = [1, 3, 5, 6, 8, 9];

// MAP
const newArray = array.map( function(item) {
    return item * 2;
});

// REDUCE
const soma = array.reduce( function(total, next) {
    return total + next;
});

// FILTER
const filter = array.filter( function() {
    return item % 2 === 0;
});