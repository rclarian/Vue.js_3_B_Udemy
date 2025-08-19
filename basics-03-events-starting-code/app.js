const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    setName(event, lastname){
      this.name = event.target.value + ' ' + lastname;
    },
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
