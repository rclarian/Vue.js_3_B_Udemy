const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    handleEnter(e) {
      if (e.key === "Enter") {
        this.addGoal();
      }
    },
    addGoal() {
      if (this.enteredGoalValue === "") {
        alert("Enter a value");
      } else {
        this.goals.push(this.enteredGoalValue);
        this.enteredGoalValue = "";
      }
    },
    removeGoal(idx){
      this.goals.splice(idx, 1);
    },
  },
  mounted() {
    window.addEventListener("keyup", this.handleEnter);
  },
  beforeUnmount() {
    window.removeEventListener("keyup", this.handleEnter);
  },
});

app.mount("#user-goals");
