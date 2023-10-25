<template>
  <div class="gaps">
    <div>
      <h2>Gaps da Sustentabilidade</h2>
      <div class="items-gaps">
        <div>
          <v-icon x-large color="#32c56d">
            mdi-book-open-page-variant-outline
          </v-icon>
          <h3>Falta de conhecimento sobre o tema;</h3>
        </div>
        <div>
          <v-icon x-large color="#32c56d"> mdi-account-group-outline </v-icon>
          <h3>Baixo comprometimento dos gestores e empregados;</h3>
        </div>
        <div>
          <v-icon x-large color="#32c56d"> mdi-pyramid </v-icon>
          <h3>Modelos de gestão hierárquicos e patriarcais;</h3>
        </div>
        <div>
          <v-icon x-large color="#32c56d"> mdi-cart-variant </v-icon>
          <h3>
            Pressão dos consumidores relacionada aos padrões de compra atual;
          </h3>
        </div>
        <div>
          <v-icon x-large color="#32c56d"> mdi-home-outline </v-icon>
          <h3>Necessidade de reagir continuamente às mudanças de mercado;</h3>
        </div>
        <div>
          <v-icon x-large color="#32c56d"> mdi-graph-outline </v-icon>
          <h3>Falta de estrutura e apoio interno e externo;</h3>
        </div>
        <div>
          <v-icon x-large color="#32c56d"> mdi-arrange-bring-to-front </v-icon>
          <h3>
            Falta de integração entre empresas, governo e movimentos
            socioambientais;
          </h3>
        </div>
        <div>
          <v-icon x-large color="#32c56d"> mdi-leaf-circle-outline </v-icon>
          <h3>
            Pouca confiança nas informações produzidas pelas empresas em geral
            (greenwashing)
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GapsHome",
};
</script>

<style lang="scss" scoped>
.gaps {
  max-width: 1312px;
  width: 100%;
  margin: 0 auto;
  margin-top: 64px;
  padding: 32px;
  background: #fff;
  div {
    h2 {
      color: #32c56d;
      font-size: 64px;
      font-weight: 300;
      line-height: 1.1;
      margin-bottom: 48px;
      @media screen and (max-width: 768px) {
        font-size: 32px;
      }
    }
    .items-gaps {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(4, 1fr);
      @media screen and (max-width: 998px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
      }
      div {
        text-align: center;
        padding: 32px;
        background-color: #fff;
        border-radius: 4px;
        border: 4px solid #e2ede6;
      }
    }
  }
}
</style>
