<template>
  <div class="banner">
    <div>
      <img src="@/assets/conexoes.png" />
    </div>
    <div class="call-to-action">
      <h1>Sustentabilidade se faz no coletivo</h1>
      <h3>
        Aqui a gente troca ideias e acha soluções para a vida em sociedade, com menos desigualdades e mais respeito ao meio ambiente.
      </h3>
      <v-btn x-large rounded class="black--text mt-6 px-10" color="#32C56D" href="https://furnastemp.aevoinnovate.net/" target="_blank"
        >Inscreva-se aqui</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerHome",
};
</script>

<style lang="scss" scoped>
.banner {
  max-width: 1312px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  img {
    height: 700px;
    @media screen and (max-width: 1200px) {
      max-width: 72%;
      height: auto;
      margin: 0 auto;
      display: block;
    }
  }
  .call-to-action {
    padding: 32px;
    h1 {
      color: #262827;
      font-size: 64px;
      font-weight: 300;
      line-height: 1.1;
      margin-bottom: 16px;
      @media screen and (max-width: 768px) {
        font-size: 32px;
      }
    }
    h3 {
      color: #262827;
      font-size: 24px;
      font-weight: 500;
      line-height: normal;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
}
</style>
