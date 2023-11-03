<template>
  <div>
    <header class="pa-8 white">
      <h1>Estatística de Idéias</h1>
    </header>
    <div v-if="loading" class="d-flex pa-8 justify-center">
      <v-progress-circular
        indeterminate
        :size="50"
        color="grey darken-3"
      ></v-progress-circular>
    </div>
    <section v-else class="pa-8 blue-grey lighten-5">
      <v-expansion-panels
        class="mb-4"
        v-for="ideia in ideiasFormatadas"
        :key="ideia.pergunta"
      >
        <v-expansion-panel>
          <v-expansion-panel-header>
            <small><strong>{{ ideia.pergunta }}</strong></small>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-4">
            <PieChart :dataChart="ideia" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-expansion-panels
        class="mb-4"
        v-for="ideia in ideias.perguntas_multiselect.all_questions"
        :key="ideia.label"
      >
        <v-expansion-panel>
          <v-expansion-panel-header>
            <small><strong>{{ ideia.label }}</strong></small>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-4">
            <PieChart :dataChart="setDataChart(ideia.opcao)" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </section>
    <AlertError :alertError="alertError" :messageError="messageError" />
  </div>
</template>

<script>
import AlertError from "../components/custom/AlertError.vue";
import PieChart from "../components/custom/PieChart.vue";
import { statisticIdeia } from "@/utils/services.js";
export default {
  name: "StatisticIdeiaView",
  components: { AlertError, PieChart },
  data: () => ({
    ideias: {},
    ideiasFormatadas: [],
    alertError: false,
    messageError: "Ocorreu um erro inesperado.",
    loading: false,
  }),
  beforeCreate() {
    if (this.$store.state.loggedIn === "deslogado") {
      this.$router.push({ path: "/login" });
    }
  },
  created() {
    this.getIdeias();
  },
  methods: {
    async getIdeias() {
      this.loading = true;
      try {
        await statisticIdeia().then((resp) => {
          this.ideias = resp;
          this.setPerguntaSelect();
          this.loading = false;
        });
      } catch (err) {
        this.alertError = true;
        this.loading = false;
        console.error(err);
      }
    },
    setDataChart(data) {
      return {
        labels: data.map((item) => item.opcao),
        datasets: [
          {
            backgroundColor: data.map(
              () => "#" + Math.floor(Math.random() * 16777215).toString(16)
            ),
            data: data.map((item) => item.count),
          },
        ],
      };
    },
    setPerguntaSelect() {
      const novoArray = [];

      for (const pergunta in this.ideias.perguntas_select) {
        const opcoes = this.ideias.perguntas_select[pergunta];
        const labels = opcoes.map((opcao) => opcao.opcao);
        const backgroundColor = opcoes.map(
          () => "#" + Math.floor(Math.random() * 16777215).toString(16)
        );
        const data = opcoes.map((opcao) => opcao.count);

        novoArray.push({
          pergunta,
          labels,
          datasets: [
            {
              backgroundColor,
              data,
            },
          ],
        });
      }
      this.ideiasFormatadas = novoArray;
    },
  },
};
</script>

<style lang="scss" scoped></style>
