import { createStore } from 'vuex';

export default createStore({
    state: {
        todos: [
            { id: 1, task: "Learn Vue.js", isCompleted: false },
            { id: 2, task: "Build a project", isCompleted: true }
        ],
        nextID: 3
    },
    mutations: {
        ADD_TODO(state, task) {
            state.todos.push({
                id: state.nextID,
                task: task.task,
                isCompleted: false
            });
            state.nextID += 1
        },
        TOGGLE_TODO(state, todoID) {
            const todo = state.todos.find(todo => todo.id === todoID);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        },
        EDIT_TODO(state, {id, newTask}){
            const todo = state.todos.find(todo => todo.id === id);
            if(todo){
                todo.task = newTask;
            }
        }
    },
    actions: {
        addTodo({ commit }, todo) {
            commit('ADD_TODO', todo);
        },
        toggleTodo({ commit }, todoID) {
            commit('TOGGLE_TODO', todoID);
        },
        editTodo({ commit }, task){
            commit('EDIT_TODO', task);
        }
    },
    getters: {
        allTodos: state => state.todos
    }
});