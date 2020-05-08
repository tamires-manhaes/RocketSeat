class TodoList{
    constructor(){
        this.todos = [];
    }

    addTodo(todo){
        this.todos.push(todo);
        console.log(this.todos);
    }

    renderTodos(todos){
        

        

        
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function (){
    const todo = document.getElementById('todo').value;
    console.log(todo);
    MinhaLista.addTodo(todo);
}