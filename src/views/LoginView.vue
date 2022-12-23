<template>
  <div class="auth">
    <form @submit.prevent="verifyUser">
      <div class="heading">Login</div>
      <span class="reroute">
        Don't have an account?
        <router-link :to="{ name: 'register' }">Register Now</router-link>
      </span>
      <div
        v-if="$store.state.message"
        :class="$store.state.ok ? 'sucess' : 'fail'"
        class="form-field form-message"
      >
        <span>{{ $store.state.message }} </span>
      </div>
      <div class="form-fields">
        <div class="form-field">
          <!-- <label for="email">Email:</label> -->
          <v-text-field
            label="Email"
            v-model="$store.state.email"
            id="email"
            type="email"
          ></v-text-field>
        </div>
        <div class="form-field">
          <!-- <label for="password">Password:</label> -->
          <v-text-field
            label="Password"
            v-model="$store.state.password"
            id="password"
            type="password"
          ></v-text-field>
        </div>
        <div class="form-field">
          <v-btn type="submit">Login</v-btn>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "LoginView",
  methods: {
    ...mapActions(["verifyUser"]),
    ...mapMutations(["resetForm"]),
  },
  created() {
    this.resetForm();

    // console.log(this.$router.push("/"));
  },
};
</script>

<style scoped>
/* form {
  height: 24rem;
} */

.form-fields {
  /* background-color: green; */
  height: 13rem;
}
</style>