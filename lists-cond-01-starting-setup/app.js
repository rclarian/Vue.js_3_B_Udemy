const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoalValue === "") {
        alert('Enter a value');
      } else {
        this.goals.push(this.enteredGoalValue);
        this.enteredGoalValue = "";
      }
    },
  },
});

app.mount("#user-goals");
