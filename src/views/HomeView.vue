<template>
  <div class="home">
    <h1>Welcome {{ state.user?.username }}</h1>
    <span
      ><i> {{ state.user?.email }}</i></span
    >
    <AccountImage :source="state.user?.userImage" :alt="state.user?.username" />
    <div class="container">
      <v-btn @click="logoutUser">Logout</v-btn>
      <v-btn @click="getUsers">Get Data</v-btn>
    </div>
  </div>
</template>

<script>
import AccountImage from "@/components/AccountImage.vue";
import { useStore } from "vuex";
export default {
  name: "HomeView",
  components: { AccountImage },
  setup() {
    console.log("HEY");
    const { state, dispatch } = useStore();

    dispatch("generateToken");

    function logoutUser() {
      dispatch("logoutUser");
    }

    function getUsers() {
      dispatch("getUsers");
    }

    console.log(state.user);

    console.log(state.templateValidation);

    return {
      state,
      logoutUser,
      getUsers,
    };
  },
};
</script>


<style scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>