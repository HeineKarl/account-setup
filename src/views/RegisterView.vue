<template>
  <div class="auth">
    <form @submit.prevent="insertUser">
      <div class="heading">Register</div>
      <span class="reroute">
        Have an account?
        <router-link :to="{ name: 'login' }">Login Now</router-link>
      </span>
      <div
        v-if="$store.state.message"
        :class="$store.state.ok ? 'sucess' : 'fail'"
        class="form-field form-message"
      >
        <span>{{ $store.state.message }}</span>
      </div>
      <div class="form-fields">
        <div class="form-field">
          <label for="username">Username:</label>
          <input v-model="$store.state.username" id="username" type="text" />
        </div>
        <div class="form-field">
          <label for="email">Email:</label>
          <input
            v-model="$store.state.email"
            pattern="[A-Za-z]+@[(?:^|\W)gmail(?:$|\W)]+\.[(?:^|\W)com(?:$|\W)]+"
            id="email"
            type="email"
          />
        </div>
        <div class="form-field">
          <label for="password">Password:</label>
          <input
            v-model="$store.state.password"
            id="password"
            type="password"
          />
        </div>
        <div class="form-field">
          <button type="submit">Register</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "RegisterView",
  methods: {
    ...mapActions(["insertUser"]),
    ...mapMutations(["resetForm"]),
  },
  created() {
    this.resetForm();
  },
};
</script>

<style>
.auth {
  background-color: white;
  padding: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form {
  background-color: white;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  /* width: clamp(16rem, 60vw, 24rem);
  height: clamp(26rem, 60vw, 30rem); */
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

form:hover {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}

form .heading {
  margin-bottom: 1rem;
}

.form-fields {
  /* background-color: lightgreen; */
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form-field {
  /* margin: 0 auto; */
  /* background-color: lightgreen; */
  display: flex;
  flex-direction: column;
  width: clamp(14rem, 50vw, 17rem);
}

.form-field label {
  font-size: 0.85rem;
}

.form-field input {
  outline: 0;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
}

.form-message {
  margin-bottom: 1rem;
}

.form-message.fail {
  background-color: firebrick;
  color: white;
}

.form-message.sucess {
  background-color: seagreen;
  color: white;
}

.form-message span {
  color: inherit;
  font-size: 0.85rem;
  padding: 0.65rem 1.5rem;
  text-align: center;
}

.form-field button {
  font-size: 0.85rem;
  padding: 0.65rem 1.5rem;
  cursor: pointer;
}

@media (min-width: 48rem) {
  form {
    padding: 3rem 2rem;
  }
}
</style>