<template>
  <div>
    <header class="pa-8 white" v-if="usuario.name">
      <h1>{{ usuario.name }}</h1>
      <span>{{ usuario.email }}</span>
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
        <v-tab> PERFIL </v-tab>
      </v-tabs>
      <v-tabs-items :value="tab">
        <v-tab-item class="py-8 blue-grey lighten-5">
          <div v-for="match in usuario.ideias" :key="match.ideia_id">
            <v-card
              @click="goTo(match.ideia_id)"
              elevation="2"
              class="mb-4 pa-4 d-flex justify-space-between align-center"
            >
              <div>
                <strong class="mr-2">{{ match.ideia_name }}</strong>
              </div>
              <div>{{ match.score }}%</div>
            </v-card>
          </div>
        </v-tab-item>
        <v-tab-item class="py-8 white">
          <div
            v-for="detalhe in usuario.additionals_informations"
            :key="detalhe.Id"
            class="pa-4"
          >
            <p>{{ detalhe.Label }}</p>
            <small
              v-if="!detalhe.Opcao && detalhe.OpcoesSelecionadas.length === 0"
              >{{ detalhe.Valor }}</small
            >
            <small v-else>{{ detalhe.Opcao }}</small>
            <div v-if="detalhe.OpcoesSelecionadas.length > 0">
              <!-- {{detalhe.OpcoesSelecionadas.length > 0}} -->
              <small v-for="opt in detalhe.OpcoesSelecionadas" :key="opt">
                <p>{{ opt }}</p>
              </small>
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </section>
    <AlertError :alertError="alertError" :messageError="messageError" />
  </div>
</template>

<script>
import AlertError from "../components/custom/AlertError.vue";
import { collaborator } from "@/utils/services.js";
export default {
  name: "CollaboratorDetailView",
  components: { AlertError },
  data: () => ({
    usuario: [],
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
    this.getUsuario();
  },
  methods: {
    async getUsuario() {
      this.loading = true;
      try {
        await collaborator(this.$route.params.id).then((resp) => {
          this.usuario = resp;
          this.loading = false;
        });
      } catch (err) {
        this.alertError = true;
        this.loading = false;
        console.error(err);
      }
    },
    goTo(id) {
      this.$router.push({ name: "IdeiaDetailView", params: { id: id } });
    },
  },
};
</script>

<style lang="scss" scoped></style>
