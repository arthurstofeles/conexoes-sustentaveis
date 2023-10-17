<template>
  <div class="default">
    <v-navigation-drawer
      class="grey darken-3 pa-5 sidebar"
      dark
      width="400"
      height="100%"
    >
      <img src="@/assets/logo-branca.png" alt="" />

      <v-list>
        <v-list-item :to="{ path: '/' }" color="dark">
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Lista de usuários</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item color="dark">
          <v-list-item-icon>
            <v-icon>mdi-lightbulb-on</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Lista de ideias</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item color="dark">
          <v-list-item-icon>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Estatística de usuários</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item color="dark">
          <v-list-item-icon>
            <v-icon>mdi-chart-areaspline-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Estatística de ideias</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-btn text> sair </v-btn>
    </v-navigation-drawer>
    <v-container fluid class="pa-4">
      <!-- <router-view /> -->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {},
};
</script>
<style lang="scss" scoped>
.default {
  display: flex;
  .sidebar {
    height: 100vh !important;
    ::v-deep .v-navigation-drawer__content {
      display: flex !important;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      ::v-deep .v-list-item__title {
        text-transform: uppercase;
      }
    }
  }
}
</style>
