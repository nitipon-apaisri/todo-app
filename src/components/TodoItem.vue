<template>
<li class="todo-item">
  <div class="container">
    <input type="checkbox" v-bind:checked="todoData.done">
    <span class="checkbox" @click="check"></span>
  </div>
  <p :class="{done: todoData.done}">{{todoData.content}}</p>
  <button v-on:click="removeTodo">X</button>
</li>
</template>

<script>
export default {
    props: {
        todoData: Object
    },
    methods:{
        check(){
            this.$emit('checkTodo')
        },
        removeTodo(){
            this.$emit('removeTodo')
        }
    }
}
</script>

<style scoped lang="scss">
.todo-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightgrey;

    p{
      width: 100%;
      white-space: nowrap;
      position: relative;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.8rem;
      &.done{text-decoration: line-through;}
      
    }

}
.todo-item > *{
    margin: 0.5rem;
}

button{
  border: 0;
  outline: none;
  /* padding: 0.5rem; */
  border-radius: 50%;
  min-width: 35px;
  min-height: 35px;
  font-weight: 900;
  color: grey;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s;
  background-color: rgba(0,0,0,0);

  &:hover{
    color: red;
    background-color: #EEE;
  }
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  height: 27px;
  width: 27px;
  display: flex;
  justify-content: center;
  background-color: #eee;
  border-radius: 50%;
}

.container:hover input ~ .checkbox {
  background-color: #666;
  outline: none;
}

.container input:checked ~ .checkbox {
  background-color: #eee;
}

.checkbox:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkbox:after {
  display: block;
}

.container .checkbox:after {
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%) rotate(45deg);
  width: 10px;
  height: 5px;
  border: solid #333;
  border-width: 0px 2px 2px 0;
}
</style>