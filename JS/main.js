new Vue ({
    el: '#app',
    data: {
        message: 'Hello',
        todoText: '',
        todos: [
            { title: 'Todo 1' },
            { title: 'Todo 2'}
        ],
        showTodos: true,
        count: 1

    },
    methods: {
        createTodo: function() {
            var todoText = this.todoText.trim();
            if(todoText){
                this.todos.push({ title: todoText});
                this.todoText= '';
            }
        },
        clearTodo: function() {
            this.todoText = '';
        },
        increaseCounter: function () {
            this.count = this.count+1;
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1);
        }
    }
});