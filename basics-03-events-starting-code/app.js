const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      //event.preventDefault();
    },
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },
    counterIncrement(num) {
      this.counter = this.counter + num;
      //this.counter++;
    },
    counterDecrement(num) {
      this.counter = this.counter - num;
      //this.counter--;
    },
  },
});

app.mount("#events");
