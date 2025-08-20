const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    outFullName(){
      console.log('Running again....')
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Clarian';
    },
    resetInput() {
      this.name = '';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
