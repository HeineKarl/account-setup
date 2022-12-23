<template>
  <div id="app">
    <router-view :key="$route.path" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },

  async mounted() {},
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  font-family: "Montserrat", sans-serif;
}

.heading {
  font-weight: 900;
  font-size: 1.5rem;
}

.btn {
  width: 10rem;
}

.btn button:nth-child(2) {
  margin-left: 0.5rem;
}

.reroute {
  margin-bottom: 1rem;
  font-size: 0.75rem;
}

button {
  background-color: black;
  color: white;
  outline: 0;
  border: 0;
  padding: 0.35rem 0.5rem;
  border-radius: 5px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60rem;
  margin: 2rem auto;
} */

.lists {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.lists th {
  padding: 0.75rem 0;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}

.lists td,
.lists th {
  border: 1px solid rgb(236, 236, 236);
  padding: 8px;
}

.lists tr:nth-child(even) {
  background-color: #f2f2f2;
}

.lists tr:hover {
  background-color: #ddd;
}
</style>
