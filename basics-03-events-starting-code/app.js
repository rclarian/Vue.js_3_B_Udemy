const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    counterIncrement(){
      return counter++;
    },
    counterDecrement(){
      return counter--;
    },
  }
});

app.mount("#events");
