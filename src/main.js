import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import NewTodo from './Components/NewTodo.vue';
import TodoItem from './Components/TodoItem.vue';
import store from './store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/TodoList', component: TodoItem },
        { path: '/AddTodo', component: NewTodo}
    ]
});
const app = createApp(App);
app.component('NewTodo', NewTodo);
app.component('TodoItem', TodoItem);
app.use(store);
app.use(router);
app.mount('#app');