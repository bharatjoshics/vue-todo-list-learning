<template>
    <section>
        <header><h1>My Todo List</h1></header>
        <!--<new-todo @add-todo="addTodo"></new-todo>-->
        <ul v-if="$route.path !== '/AddTodo'">
            <todo-item
                v-for="todo in todos" :key="todo.id"
                :id="todo.id"
                :task="todo.task"
                :isCompleted="todo.isCompleted"
                @toggle-completion="toggleCompletionStatus"
                @edit-task="editTask">
            </todo-item>
            <!--<router-link to="/AddTodo">Add New</router-link>-->
        </ul>
        <!--<router-view></router-view>-->
        <router-link to="/AddTodo">Add New</router-link>
        <router-view></router-view>
    </section>
</template>

<script>
//import NewTodo from './Components/NewTodo.vue';
//import TodoItem from './Components/TodoItem.vue';
import { mapState, mapActions } from 'vuex';
export default {
  //components: { NewTodo, TodoItem },
    /*data() {
        return {
            todos: [
                { id: 1, task: "Learn Vue.js", isCompleted: false },
                { id: 2, task: "Build a project", isCompleted: true }
            ]
        };
    },
    methods: {
        toggleCompletionStatus(todoID) {
            const Todo = this.todos.find(todo => todo.id === todoID);
            Todo.isCompleted = !Todo.isCompleted;
        },
        addTodo(id, task) {
            const newTodo = { 
                id: id,
                task: task,
                isCompleted: false
            };
            this.todos.push(newTodo);
        }
    }*/
   computed: {
      ...mapState(['todos'])
   },
   methods: {
      ...mapActions(['toggleTodo', 'editTodo']),
      toggleCompletionStatus(todoID){
          this.toggleTodo(todoID);
      },
     editTask(todoID, newTask){
        this.editTodo({id: todoID, newTask});
     }
   }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #007BFF;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #007BFF;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #28a745;
  background-color: #28a745;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #218838;
  border-color: #218838;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}
</style>
