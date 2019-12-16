var TodoComponent = Vue.extend({
    data: function (){
        return {
            inEditMode: false
        }
    },
    props:  ['todo'],
    template: '<div><span v-on:click="done" v-show="!inEditMode">{{ todo.title }}</span><input v-on:keyup.enter="saved" v-model="todo.title" v-show="inEditMode" /> </div>',
    methods:{
        done: function(){
            this.inEditMode  = true;
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
        

    },
    methods: {
        createTodo: function() {
            const date = new Date();
            const todoDate = date.toLocaleString();
            var todoText = this.todoText.trim();
            if(todoText){
                this.todos.push({ title: todoText, dateCreated: todoDate});
                this.todoText= '';
            }
        },
        clearTodo: function() {
            this.todoText = '';
        },
        removeTodo: function (index) {
            this.todos.splice(index,1);
        }
    }
});