<template>
  <div class="login">
    <div class="pa-4 form">
      <img src="@/assets/logo-branca.png" alt="logo" />
      <v-form ref="form" v-model="valid" lazy-validation class="pa-4">
        <v-text-field
          class="pb-6"
          v-model="form.email"
          :rules="rules.emailRules"
          label="E-mail"
          required
          placeholder="Insira seu em-mail"
          :error-messages="error ? messageError : formError.email"
          :validate-on-blur="true"
          @blur="formError.email = null"
          :error="error"
          dark
          color="#32C56D"
        ></v-text-field>
        <v-text-field
          class="pb-6"
          v-model="form.password"
          required
          dark
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
        <p class="pb-6">
          <router-link
            to="/recuperar-senha"
            color="#32C56D"
            class="text-decoration-none"
            >Esqueceu a senha?</router-link
          >
        </p>
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
    </div>
    <div class="bg"></div>
    <AlertError :alertError="alertError" :messageError="messageError" />
  </div>
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
  display: grid;
  grid-template-columns: 500px auto;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .form {
    height: 100vh;
    background-color: #262827;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    width: 100%;
    form {
      width: 100%;
    }
  }
  .bg {
    background-image: url("@/assets/bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}
</style>
