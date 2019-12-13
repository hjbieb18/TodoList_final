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
        title: this.todoText,
        todoText: '',
        todos: [],
        doneTodo: false,
        count: 1

    },
    methods: {
        createTodo: function() {
            const date = new Date();
            const todoDate = date.toLocaleString();
            var todoText = this.todoText.trim();
            if(todoText){
                this.todos.push({ title: todoText, done:false, dateCreated: todoDate});
                this.todoText= '';
            }
        },
        check(todo){
            todo.done = !todo.done

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