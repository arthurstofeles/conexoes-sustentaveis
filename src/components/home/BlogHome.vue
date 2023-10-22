<template>
  <div class="blog">
    <div>
      <h2>Blog</h2>
      <h3>
        Veja aqui as novidades e ações da nossa comunidade sustentável.
      </h3>
      <v-btn x-large rounded class="black--text mt-6 px-10" color="#32C56D"
        >Participar</v-btn
      >
    </div>
    <img src="@/assets/blog-img.png" />
  </div>
</template>

<script>
export default {
  name: "BlogHome",
};
</script>

<style lang="scss" scoped>
.blog {
  max-width: 1312px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 32px;
  padding: 32px;
  gap: 32px;
  background: rgb(38, 40, 39);
  background: linear-gradient(
    180deg,
    rgba(38, 40, 39, 1) 0%,
    rgba(38, 40, 39, 1) 70%,
    rgba(226, 237, 230, 1) 70%,
    rgba(226, 237, 230, 1) 100%
  );
  @media screen and (max-width: 998px) {
    flex-direction: column;
  }
  div {
    padding-top: 64px;
    h2 {
      color: #32c56d;
      font-size: 64px;
      font-weight: 300;
      line-height: 1.1;
      margin-bottom: 16px;
      @media screen and (max-width: 768px) {
        font-size: 32px;
      }
    }
    h3 {
      color: #32c56d;
      font-size: 24px;
      font-weight: 500;
      line-height: normal;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  img {
    max-width: 656px;
    @media screen and (max-width: 1200px) {
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
    }
  }
}
</style>
