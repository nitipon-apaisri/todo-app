import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      todos: [],
   },
   mutations: {
      addTodo(state, value) {
         state.todos.push({
            id: Date.now(),
            content: value,
            done: false,
         });
      },
   },
});
