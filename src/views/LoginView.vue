<template>
  <v-container fluid class="login fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="4" md="6" sm="8">
        <v-card class="pa-4">
          <v-card-title> Login </v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation class="pa-4">
            <v-text-field
              v-model="form.email"
              :rules="rules.emailRules"
              label="E-mail"
              required
              outlined
              placeholder="Insira seu em-mail"
              :error-messages="error ? messageError : formError.email"
              :validate-on-blur="true"
              @blur="formError.email = null"
              :error="error"
              color="#32C56D"
            ></v-text-field>
            <v-text-field
              v-model="form.password"
              required
              outlined
              placeholder="Digite sua senha"
              label="Senha"
              :rules="rules.passwordRules"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              :error-messages="error ? messageError : formError.password"
              :validate-on-blur="true"
              @blur="formError.password = null"
              :error="error"
              color="#32C56D"
            ></v-text-field>
            <v-btn
              :disabled="loading"
              :loading="loading"
              color="#32C56D"
              class="mr-4 black--text"
              rounded
              block
              @click="login"
            >
              Entrar
            </v-btn>
          </v-form>
        </v-card>
        <p class="text-center pa-4">
          <router-link
            to="/recuperar-senha"
            color="#32C56D"
            class="text-decoration-none"
            >Esqueceu a senha?</router-link
          >
        </p>
      </v-col>
      <AlertError :alertError="alertError" :messageError="messageError" />
    </v-row>
  </v-container>
</template>

<script>
import AlertError from "../components/custom/AlertError.vue";
import { rules } from "@/utils/rules";
export default {
  components: { AlertError },
  name: "LoginView",
  data: () => ({
    valid: true,
    error: false,
    form: {
      email: "",
      password: "",
    },
    showPassword: false,
    loading: false,
    alertError: false,
    messageError: "",
    formError: {},
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    async login() {
      this.loading = true;
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
.login {
  background-color: #E2EDE6;
}
</style>