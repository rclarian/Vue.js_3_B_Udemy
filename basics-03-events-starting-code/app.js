const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    counterIncrement(){
      this.counter++;
    },
    counterDecrement(){
      this.counter--;
    },
  }
});

app.mount("#events");
