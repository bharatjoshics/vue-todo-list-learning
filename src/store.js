import { createStore } from 'vuex';

export default createStore({
    state: {
        todos: [
            { id: 1, task: "Learn Vue.js", isCompleted: false },
            { id: 2, task: "Build a project", isCompleted: true }
        ]
    },
    mutations: {
        ADD_TODO(state, newTodo) {
            state.todos.push(newTodo);
        },
        TOGGLE_TODO(state, todoID) {
            const todo = state.todos.find(todo => todo.id === todoID);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        }
    },
    actions: {
        addTodo({ commit }, todo) {
            commit('ADD_TODO', todo);
        },
        toggleTodo({ commit }, todoID) {
            commit('TOGGLE_TODO', todoID);
        }
    },
    getters: {
        allTodos: state => state.todos
    }
});