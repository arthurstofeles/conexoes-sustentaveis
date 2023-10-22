<template>
  <div class="recupera">
    <div class="pa-4 form">
      <img src="@/assets/logo-branca.png" alt="logo" />
      <h3 class="white--text">Recuperar Senha</h3>
      <p class="white--text">
        Ensira um em-amil válido para recuperar sua senha:
      </p>
      <v-form ref="form" v-model="valid" lazy-validation class="pa-4">
        <v-text-field
          class="pb-6"
          v-model="form.email"
          :rules="rules.emailRules"
          label="E-mail"
          required
          dark
          placeholder="Insira seu em-mail"
          :validate-on-blur="true"
          :error="error"
          color="#32C56D"
        ></v-text-field>
        <p class="pb-6">
          <router-link to="/login" color="primary" class="text-decoration-none"
            ><v-icon color="primary" small>mdi-arrow-left</v-icon>Voltar para o
            login</router-link
          >
        </p>
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
    </div>
    <div class="bg"></div>
    <AlertError :alertError="alertError" :messageError="messageError" />
    <AlertSuccess
      :dialog="dialog"
      :dialogMessage="dialogMessage"
      dialogTextButton="Ok"
      @close="confimationSuccess"
    />
  </div>
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
