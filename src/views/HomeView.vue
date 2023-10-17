<template>
  <div class="home">
    <HeaderLayout />
    <BannerHome />
    <FuncionaHome />
    <BlogHome />
    <QuemSomosHome />
  </div>
</template>

<script>
import HeaderLayout from "../layouts/HeaderLayout";
import BannerHome from "../components/home/BannerHome";
import FuncionaHome from "../components/home/FuncionaHome";
import BlogHome from "../components/home/BlogHome";
import QuemSomosHome from "../components/home/QuemSomosHome";
export default {
  name: "HomeView",
  data: () => ({}),
  components: {
    HeaderLayout,
    BannerHome,
    FuncionaHome,
    BlogHome,
    QuemSomosHome
  },
};
</script>

<style lang="scss" scoped>
.home {
  scroll-behavior: smooth;
  background-color: #E2EDE6;
}
</style>
