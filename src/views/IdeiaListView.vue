<template>
  <div>
    <header class="pa-8 white">
      <h1>Idéias</h1>
      <span>Lista com todos as ideias</span>
    </header>
    <div v-if="loading" class="d-flex pa-8 justify-center">
      <v-progress-circular
        indeterminate
        :size="50"
        color="grey darken-3"
      ></v-progress-circular>
    </div>
    <section v-else class="pa-8 blue-grey lighten-5">
      <div v-for="ideia in ideias" :key="ideia.id">
        <v-card
          elevation="2"
          class="mb-4 pa-4 d-flex justify-space-between align-center"
        >
          <div class="d-flex justify-start align-center">
            <div>
              <strong class="mr-2">{{ ideia.title }}</strong>
            </div>
            <small>- {{ converterData(ideia.created_at) }}</small>
          </div>
          <v-btn
            rounded
            depressed
            color="#32C56D"
            dark
            @click="viewDetails(ideia.id)"
            >Detalhes</v-btn
          >
        </v-card>
      </div>
    </section>
    <AlertError :alertError="alertError" :messageError="messageError" />
  </div>
</template>

<script>
import AlertError from "../components/custom/AlertError.vue";
import { ideias } from "@/utils/services.js";
export default {
  name: "IdeiaListView",
  components: { AlertError },
  data: () => ({
    ideias: [],
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
        await ideias().then((resp) => {
          this.ideias = resp;
          this.loading = false;
        });
      } catch (err) {
        this.alertError = true;
        this.loading = false;
        console.error(err);
      }
    },
    converterData(data) {
      const dataObj = new Date(data);
      const dia = String(dataObj.getDate()).padStart(2, "0");
      const mes = String(dataObj.getMonth() + 1).padStart(2, "0"); // O mês é baseado em zero, então
      const ano = dataObj.getFullYear();

      return `${dia}/${mes}/${ano}`;
    },
    viewDetails(id) {
      this.$router.push({ name: "IdeiaDetailView", params: { id: id } });
    },
  },
};
</script>

<style lang="scss" scoped></style>
