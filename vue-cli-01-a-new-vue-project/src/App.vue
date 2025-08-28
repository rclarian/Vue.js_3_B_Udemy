<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact />
      <friend-contact />
    </ul>
  </section>
</template>

<script>
//import FriendContact from './components/FriendContact.vue';
export default {
  name: "App",
  components: {
    //FriendContact,
  },
  data() {
    return {
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
};
</script>

<style scoped></style>
