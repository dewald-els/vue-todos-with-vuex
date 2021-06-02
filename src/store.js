import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const KEY_SESSION_USERNAME = 'v-todo-username'

export const initialiseStore = store => {
    // Check if a user currently exists in the session
    const profile = sessionStorage.getItem(KEY_SESSION_USERNAME)
    if (profile) { // Dispatch the loginUser action
        store.commit('setProfile', profile)
    }
}

export default new Vuex.Store({
    state: {
        profile: '',
        todos: []
    },
    mutations: {
        setProfile: (state, payload) => {
            state.profile = payload
        },
        setTodos: (state, payload) => {
            state.todos = payload
        },
        addTodo: (state, payload) => {
            state.todos.push(payload)
        },
        toggleTodoComplete: (state, payload) => {
            const updateTodoIdx = state.todos.findIndex(todo => todo.id === payload)
            state.todos[updateTodoIdx].completed = !state.todos[updateTodoIdx].completed
        }
    },
    getters: {
        numberOfTodos: (state, getters) => {
            return getters.incompleteTodos.length
        },
        completedTodos: (state) => {
            return state.todos.filter((todo) => todo.completed);
        },
        incompleteTodos: (state) => {
            return state.todos.filter((todo) => !todo.completed);
        },
    },
    actions: {
        loginUser({commit}, payload) {
            // Make a asynchronous request!
            setTimeout(() => {
                sessionStorage.setItem(KEY_SESSION_USERNAME, payload)
                commit('setProfile', payload)
            }, 500)
        },
        logoutUser({ commit }) {
            sessionStorage.removeItem(KEY_SESSION_USERNAME)
            commit('setProfile', '')
        },
        async fetchTodos({commit}) {
            try {
                const response = await fetch("http://localhost:3000/todos")
                const todos = await response.json()
                commit('setTodos', todos)
            } catch (error) {
                console.log(error);
            }
        },
        async toggleTodoComplete({commit}, {id, completed}) {
            try {
                const response = await fetch(`http://localhost:3000/todos/${id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({completed})
                })
                const todo = await response.json()
                commit('toggleTodoComplete', todo.id)
            } catch (error) {
                console.log(error.message)
            }
        },
    }
})
