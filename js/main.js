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
    };
  },

  methods: {
    checkStatus(check) {
      if (check === true) return 'text-decoration-line-through';
      else return 'text-decoration-none';
    },
  },
}).mount('#app');
