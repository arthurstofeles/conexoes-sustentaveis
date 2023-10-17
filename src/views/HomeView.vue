<template>
  <div class="home">
    <HeaderLayout />
    <BannerHome />
  </div>
</template>

<script>
import HeaderLayout from "../layouts/HeaderLayout";
import BannerHome from "../components/home/BannerHome";
export default {
  name: "HomeView",
  data: () => ({}),
  components: {
    HeaderLayout,
    BannerHome
  },
};
</script>

<style lang="scss" scoped>
.home {
  scroll-behavior: smooth;
  background-color: #E2EDE6;
}
</style>
