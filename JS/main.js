var TodoComponent = Vue.extend({
    data: function (){
        return {
            inEditMode: false
        }
    },
    props: ['todo'],
    template: '<div><span v-on:click="clicked" v-show="!inEditMode">{{ todo.title }}</span><input v-on:keyup.enter="saved" v-model="todo.title" v-show="inEditMode" /> </div>',
    methods: {
        clicked: function(){
            this.inEditMode = true;
        },
        saved: function() {
            this.inEditMode = false;
        }
    }
});

Vue.component('todo-component', TodoComponent);



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