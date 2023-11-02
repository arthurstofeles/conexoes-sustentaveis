<template>
  <div>
    <header class="pa-8 white" v-if="ideia.title">
      <h1>{{ ideia.title }}</h1>
      <span>Criada em: {{ converterData(ideia.created_at) }}</span>
    </header>
    <div v-if="loading" class="d-flex pa-8 justify-center">
      <v-progress-circular
        indeterminate
        :size="50"
        color="grey darken-3"
      ></v-progress-circular>
    </div>
    <section v-else class="pa-8 blue-grey lighten-5">
      <v-tabs v-model="tab" background-color="white" color="#32C56D">
        <v-tab> IDEA MATCH </v-tab>
        <v-tab> DESCRIÇÃO </v-tab>
      </v-tabs>
      <v-tabs-items :value="tab">
        <v-tab-item class="py-8 blue-grey lighten-5">
          <div
            v-for="match in ideia.collaborators"
            :key="match.collaborator_id.id"
          >
            <v-card
              elevation="2"
              class="mb-4 pa-4 d-flex justify-space-between align-center"
            >
              <div>
                <strong class="mr-2">{{ match.collaborator_name }}</strong>
              </div>
              <div>{{ match.score }}%</div>
            </v-card>
          </div>
        </v-tab-item>
        <v-tab-item class="py-8 white">
          <div class="pa-4">
            <p>Descrição:</p>
            <small>{{ ideia.description }}</small>
            <p class="mt-4">Benefícios:</p>
            <small>{{ ideia.benefit }}</small>
          </div>
          <div
            v-for="detalhe in ideia.additionals"
            :key="detalhe.Id.id"
            class="pa-4"
          >
            <p>{{ detalhe.Label }}</p>
            <small v-if="!detalhe.Opcao">{{ detalhe.Valor }}</small>
            <small v-else>{{ detalhe.Opcao }}</small>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </section>
    <AlertError :alertError="alertError" :messageError="messageError" />
  </div>
</template>

<script>
import AlertError from "../components/custom/AlertError.vue";
import { ideia } from "@/utils/services.js";
export default {
  name: "IdeiaDetailView",
  components: { AlertError },
  data: () => ({
    ideia: [],
    alertError: false,
    messageError: "Ocorreu um erro inesperado.",
    loading: false,
    tab: null,
  }),
  beforeCreate() {
    if (this.$store.state.loggedIn === "deslogado") {
      this.$router.push({ path: "/login" });
    }
  },
  created() {
    this.getIdeia();
  },
  methods: {
    async getIdeia() {
      this.loading = true;
      try {
        await ideia(this.$route.params.id).then((resp) => {
          this.ideia = resp;
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
  },
};
</script>

<style lang="scss" scoped></style>
