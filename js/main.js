'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        {
          text: 'Fare una passeggiata al parco',
          done: false,
        },
        {
          text: 'Magiare un gelato',
          done: true,
        },
        {
          text: 'Fare sport',
          done: true,
        },
      ],
      newTodo: null,
    };
  },

  methods: {
    checkStatus(check) {
      if (check === true) return 'text-decoration-line-through';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    addTodo() {
      if (this.newTodo.trim() === '') return;
      else this.todos.push({ text: this.newTodo, done: false });
      this.newTodo = null;
    },
    doneModifier(index) {
      this.todos[index].done
        ? (this.todos[index].done = false)
        : (this.todos[index].done = true);
    },
  },
}).mount('#app');
