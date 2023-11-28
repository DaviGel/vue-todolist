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
      else return 'text-decoration-none';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    addTodo() {
      this.todos.push({ text: this.newTodo, done: false });
      this.newTodo = null;
    },
  },
}).mount('#app');
