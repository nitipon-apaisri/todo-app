<template>
  <div class="todo-list">
    <header>
      <img src="@/assets/pan.svg" alt="" />
      <h1>TEFLON</h1>
      <h3>När det inte fastnar</h3>
      <p>
        Du har <strong>{{ todosLeft.length }}</strong> kvar att göra
      </p>
    </header>
    <ul>
      <TodoItem
        v-for="item in todosLeft"
        :key="item.id"
        :todoData="item"
        @checkTodo="checkTodo(item)"
        @removeTodo="removeTodo(item)"
      />
    </ul>
    <input
      type="text"
      v-model="newContent"
      placeholder="Gör nått..."
      @keyup.enter="addTodo"
    />
    <button @click="addTodo">Lägg till todo</button>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  components: { TodoItem },
  data() {
    return {
      newContent: "",
    };
  },

  computed: {
    todosLeft() {
      return this.$store.state.todos;
    },
  },

  methods: {
    addTodo() {
      this.$store.commit("addTodo", this.newContent);
      this.newContent = "";
    },
    checkTodo(todo) {
      todo.done = !todo.done;
      setTimeout(() => {
        this.$store.state.todos = this.$store.state.todos.filter(
          (element) => element.id != todo.id
        );
      }, 300);
    },
    removeTodo(todo) {
      this.$store.state.todos = this.$store.state.todos.filter(
        (element) => element.id != todo.id
      );
    },
  },
};
</script>

<style scoped lang="scss">
.todo-list {
  max-width: 25rem;
  min-width: 15rem;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  ul {
    padding: 0;
  }
}
input {
  padding: 1rem;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.5);
  outline: none;
  text-align: center;
  font-size: 1rem;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 30%;
  }
  h3 {
    font-size: 0.75rem;
  }
  & > * {
    margin: 0 1rem;
  }
  p {
    margin-top: 1rem;
  }
}
button {
  color: white;
  background-color: black;
  outline: none;
  border: 0;
  padding: 1rem;
  font-size: 0.9rem;
  font-weight: 900;
}
</style>