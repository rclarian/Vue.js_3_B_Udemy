<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input id="name" type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input id="phone" type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label for="email">Email</label>
      <input id="email" type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "NewFriend",
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
        this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
        this.enteredName = '';
        this.enteredPhone = '';
        this.enteredEmail = '';
    },
  },
};
</script>

<style scoped></style>
