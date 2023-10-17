<template>
  <div class="banner">
    <div>
      <img src="@/assets/conexoes.png" />
    </div>
    <div class="call-to-action">
      <h1>Sustentabilidade não se faz sozinho.</h1>
      <h3>
        Cras quis gravida leo. Vivamus eu cursus risus. Sed vehicula
        sollicitudin eros, pretium luctus
      </h3>
      <v-btn x-large rounded class="black--text mt-6 px-10" color="#32C56D"
        >Ir para plataforma EVO</v-btn
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
    @media screen and (max-width: 768px) {
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
