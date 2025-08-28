const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "09478851662",
          email: "manuel@yahoo.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09478851663",
          email: "julie@yahoo.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails(id) {
        this.detailsAreVisible = !this.detailsAreVisible;
    }
  },
});

app.mount("#app");
