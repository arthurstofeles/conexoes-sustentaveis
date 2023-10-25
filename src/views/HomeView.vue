<template>
  <div class="home">
    <HeaderLayout  />
    <BannerHome id="inicio" />
    <FuncionaHome id="como-funciona" />
    <GapsHome id="gap" />
    <BlogHome id="blog" />
    <QuemSomosHome id="quem-somos" />
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
import GapsHome from "../components/home/GapsHome";
export default {
  name: "HomeView",
  data: () => ({}),
  components: {
    HeaderLayout,
    BannerHome,
    FuncionaHome,
    BlogHome,
    QuemSomosHome,
    FooterHome,
    GapsHome
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
