const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    counterIncrement(num){
      this.counter = this.counter + num;
      //this.counter++;
    },
    counterDecrement(num){
      this.counter = this.counter - num;
      //this.counter--;
    },
  }
});

app.mount("#events");
