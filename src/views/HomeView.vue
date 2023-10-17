<template>
  <div class="home">
    <HeaderLayout />
    <BannerHome />
    <FuncionaHome />
    <BlogHome />
  </div>
</template>

<script>
import HeaderLayout from "../layouts/HeaderLayout";
import BannerHome from "../components/home/BannerHome";
import FuncionaHome from "../components/home/FuncionaHome";
import BlogHome from "../components/home/BlogHome";
export default {
  name: "HomeView",
  data: () => ({}),
  components: {
    HeaderLayout,
    BannerHome,
    FuncionaHome,
    BlogHome
  },
};
</script>

<style lang="scss" scoped>
.home {
  scroll-behavior: smooth;
  background-color: #E2EDE6;
}
</style>
