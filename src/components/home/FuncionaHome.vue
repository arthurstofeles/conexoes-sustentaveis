<template>
  <div class="como-funciona">
    <h2>Como Funciona</h2>
    <div class="steeps">
      <div class="steep">
        <div class="number">1</div>
        <div class="text">
          Cadastre-se na <a href="#" target="_blanl">plataforma</a>, e preencha
          o formulário de autodiagnose.
        </div>
      </div>
      <div class="steep">
        <div class="number">2</div>
        <div class="text">
          Agora que sabemos um pouco mais sobre você, é uma boa hora para
          cadastrar suas ideias / iniciativas.
        </div>
      </div>
      <div class="steep">
        <div class="number">3</div>
        <div class="text">
          Nossa Inteligência HUMANIZADA - “Conexões por Todos” cruza os dados
          para conectar as pessoas certas das ideias certas.
        </div>
      </div>
      <div class="steep">
        <div class="number">4</div>
        <div class="text">
          A Conexões faz a ponte entre ideias e pessoas, promovendo
          sustentabilidade de forma inteligente.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FuncionaHome",
};
</script>

<style lang="scss" scoped>
.como-funciona {
  background-color: #32c56d;
  max-width: 1312px;
  width: 100%;
  margin: 0 auto;
  padding-top: 32px;
  padding-bottom: 96px;
  h2 {
    color: #262827;
    font-size: 64px;
    font-weight: 600;
    padding-left: 32px;
    padding-bottom: 86px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
    }
  }
  .steeps {
    background-color: #e2ede6;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 0px 16px;
    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 64px;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 64px;
    }
    .steep {
      position: relative;
      padding: 64px 32px;
      background-color: #e2ede6;
      border-radius: 16px;
      margin-top: -32px;
      margin-bottom: -32px;
      .number {
        width: 95px;
        height: 95px;
        text-align: center;
        position: absolute;
        color: #262827;
        text-align: center;
        font-size: 48px;
        font-weight: 600;
        top: -33px;
        left: 0;
        border-radius: 50%;
        background-color: #e2ede6;
        padding: 8px;
      }
      .text {
        color: #262827;
        font-size: 24px;
        font-weight: 500;
        padding: 32px 0px;
        border-top: 8px solid #262827;
        border-bottom: 8px solid #262827;
        height: 100%;
        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
