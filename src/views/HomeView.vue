<template>
  <div class="home">
    <HeaderLayout />
    <BannerHome />
    <FuncionaHome />
    <BlogHome />
    <QuemSomosHome />
    <FooterHome />
  </div>
</template>

<script>
import HeaderLayout from "../layouts/HeaderLayout";
import BannerHome from "../components/home/BannerHome";
import FuncionaHome from "../components/home/FuncionaHome";
import BlogHome from "../components/home/BlogHome";
import QuemSomosHome from "../components/home/QuemSomosHome";
import FooterHome from "../components/home/FooterHome";
export default {
  name: "HomeView",
  data: () => ({}),
  components: {
    HeaderLayout,
    BannerHome,
    FuncionaHome,
    BlogHome,
    QuemSomosHome,
    FooterHome
  },
};
</script>

<style lang="scss" scoped>
.home {
  scroll-behavior: smooth;
  background-color: #E2EDE6;
  padding-bottom: 32px;
}
</style>
