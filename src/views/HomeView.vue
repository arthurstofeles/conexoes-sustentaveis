<template>
  <div class="home">
    <HeaderLayout />
  </div>
</template>

<script>
import HeaderLayout from "../layouts/HeaderLayout";
export default {
  name: "HomeView",
  data: () => ({}),
  components: {
    HeaderLayout,
  },
};
</script>

<style lang="scss" scoped>
.home {
  scroll-behavior: smooth;
}
</style>
