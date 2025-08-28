<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "App",
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
