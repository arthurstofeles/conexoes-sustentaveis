<template>
  <v-container fluid class="recupera fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="4" md="6" sm="8">
        <v-card class="pa-4">
          <v-card-title>Recuperar Senha</v-card-title>
          <v-card-text
            >Ensira um em-amil válido para recuperar sua senha:</v-card-text
          >
          <v-form ref="form" v-model="valid" lazy-validation class="pa-4">
            <v-text-field
              v-model="form.email"
              :rules="rules.emailRules"
              label="E-mail"
              required
              outlined
              placeholder="Insira seu em-mail"
              :validate-on-blur="true"
              :error="error"
              color="#32C56D"
            ></v-text-field>
            <v-btn
              :disabled="loading"
              :loading="loading"
              color="#32C56D"
              rounded
              block
              @click="recover"
            >
              Recuperar
            </v-btn>
          </v-form>
        </v-card>
        <p class="text-center pa-4">
          <router-link to="/login" color="primary" class="text-decoration-none"
            ><v-icon color="primary" small>mdi-arrow-left</v-icon>Voltar para o
            login</router-link
          >
        </p>
      </v-col>
      <AlertError :alertError="alertError" :messageError="messageError" />
      <AlertSuccess
        :dialog="dialog"
        :dialogMessage="dialogMessage"
        dialogTextButton="Ok"
        @close="confimationSuccess"
      />
    </v-row>
  </v-container>
</template>

<script>
import AlertSuccess from "../components/custom/AlertSuccess.vue";
import AlertError from "../components/custom/AlertError.vue";
import { rules } from "@/utils/rules";
export default {
  components: { AlertError, AlertSuccess },
  name: "RecuperarSenhaView",
  data: () => ({
    valid: true,
    error: false,
    form: {
      email: "",
    },
    loading: false,
    alertError: false,
    messageError: "",
    formError: {},
    dialogMessage: "",
    dialog: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    async recover() {
      this.loading = true;
    },
    confimationSuccess() {
      this.$router.push({ path: "/login" });
    },
  },
  computed: {
    formValid() {
      return this.$refs.form.validate();
    },
  },
  created() {
    this.rules = rules;
  },
};
</script>
<style lang="scss" scoped>
.recupera {
  background-color: #E2EDE6;
}
</style>