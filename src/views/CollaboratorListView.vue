<template>
  <div>
    <header class="pa-8 white">
      <h1>Usuários</h1>
      <span>Lista com todos os usuários</span>
    </header>
    <div v-if="loading" class="d-flex pa-8 justify-center">
      <v-progress-circular
        indeterminate
        :size="50"
        color="grey darken-3"
      ></v-progress-circular>
    </div>
    <section v-else class="pa-8 blue-grey lighten-5">
      <div v-for="usuario in usuarios" :key="usuario.id">
        <v-card
          elevation="2"
          class="mb-4 pa-4 d-flex justify-space-between align-center"
        >
          <div class="d-flex justify-start align-center">
            <div>
              <strong class="mr-2">{{ usuario.name }}</strong>
            </div>
            <small>- {{ usuario.email }}</small>
          </div>
          <v-btn
            rounded
            depressed
            color="#32C56D"
            dark
            @click="viewDetails(usuario.id)"
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
import { collaborators } from "@/utils/services.js";
export default {
  name: "CollaboratorListView",
  components: { AlertError },
  data: () => ({
    usuarios: [],
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
    this.getUsuarios();
  },
  methods: {
    async getUsuarios() {
      this.loading = true;
      try {
        await collaborators().then((resp) => {
          this.usuarios = resp;
          this.loading = false;
        });
      } catch (err) {
        this.alertError = true;
        this.loading = false;
        console.error(err);
      }
    },
    viewDetails(id) {
      this.$router.push({ name: "CollaboratorDetailView", params: { id: id } });
    },
  },
};
</script>

<style lang="scss" scoped></style>
