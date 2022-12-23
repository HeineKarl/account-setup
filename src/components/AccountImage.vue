<template>
  <div class="account-image">
    <img
      lazy
      :src="source == undefined ? require('@/assets/user/default.png') : source"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  name: "AccountImage",
  props: {
    source: {
      type: String,
      default: require("@/assets/user/default.png"),
    },
    alt: {
      type: String,
      default: "Default",
    },
  },
  setup({ source }) {
    // setTimeout(() => {
    //   if (source === null || source === undefined) {
    //     return {
    //       defaultImg: require("../assets/user/default.png"),
    //     };
    //   }
    // }, 1000);
  },
};
</script>

<style  scoped>
.account-image {
  --area: 5rem;
  width: var(--area);
  height: var(--area);
  border-radius: 50%;
  overflow: hidden;
}
</style>