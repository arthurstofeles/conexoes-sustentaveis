<template>
  <div class="quem-somos">
    <h2>Quem Somos</h2>
    <h3>
      Cras quis gravida leo. Vivamus eu cursus risus. Sed vehicula sollicitudin
      eros, pretium luctus
    </h3>
    <div class="people">
      <div>
        <img src="@/assets/Rectangle 13.png" alt="" />
        <p>Nome da Pessoa</p>
        <span>Função da Pessoa</span>
      </div>
      <div>
        <img src="@/assets/Rectangle 13.png" alt="" />
        <p>Nome da Pessoa</p>
        <span>Função da Pessoa</span>
      </div>
      <div>
        <img src="@/assets/Rectangle 13.png" alt="" />
        <p>Nome da Pessoa</p>
        <span>Função da Pessoa</span>
      </div>
      <div>
        <img src="@/assets/Rectangle 13.png" alt="" />
        <p>Nome da Pessoa</p>
        <span>Função da Pessoa</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuemSomosHome",
};
</script>

<style lang="scss" scoped>
.quem-somos {
  max-width: 1312px;
  width: 100%;
  margin: 0 auto;
  h2 {
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
  .people {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    margin-top: 32px;
    @media screen and (max-width: 998px) {
      flex-direction: column;
    }
    img {
      max-width: 100%;
    }
    p {
      color: #262827;
      text-align: center;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 8px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
    span {
      color: #262827;
      display: block;
      text-align: center;
      font-size: 16px;
      font-weight: 500;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
}
</style>
