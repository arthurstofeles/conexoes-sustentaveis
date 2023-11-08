<template>
  <div class="home">
    <HeaderLayout />
    <BannerHome id="inicio" />
    <FuncionaHome id="como-funciona" />
    <GapsHome id="gap" />
    <BlogHome id="blog" />
    <QuemSomosHome id="quem-somos" />
    <FooterHome />
    <div class="d-flex justify-center">
      <v-btn
        x-small
        rounded
        class="black--text text-center mt-6"
        to="/login"
        outlined
        dark
        target="_blank"
        >área restrita</v-btn
      >
    </div>
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
    GapsHome,
  },
};
</script>

<style lang="scss" scoped>
.home {
  scroll-behavior: smooth;
  background-color: #e2ede6;
  padding-bottom: 32px;
}
</style>
