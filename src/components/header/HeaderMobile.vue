<template>
  <div :class="{ onScroll: !topOfPage }">
    <header class="header">
      <img src="@/assets/conexoes-logo.svg" alt="Logo" />
      <v-icon
        @click.stop="
          drawer = !drawer;
          $emit('open');
        "
        color="black"
        >mdi-menu</v-icon
      >
    </header>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
      class="pa-2 hy_blue"
      width="900"
    >
      <nav class="nav">
        <img src="@/assets/icone-circulo.svg" class="mb-6" />
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <a
              @click="
                drawer = !drawer;
                $emit('open');
              "
              :href="link.ancor"
              v-smooth-scroll="{
                duration: 1000,
                updateHistory: false,
                offset: -50,
              }"
              >{{ link.title }}</a
            >
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/86860086/admin/feed/posts/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon large color="black"> mdi-linkedin </v-icon></a
            >
          </li>
        </ul>
        <v-icon
          @click="
            drawer = !drawer;
            $emit('open');
          "
          large
          color="black"
        >
          mdi-close
        </v-icon>
      </nav>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "HeaderMobile",
  props: {
    links: {
      type: Array,
      required: true,
    },
    topOfPage: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    drawer: false,
  }),
};
</script>

<style lang="scss" scoped>
.onScroll {
  background-color: #fff;
  box-shadow: 0 0 10px #aaa;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 16px;
  position: relative;
  z-index: 1;
  img {
    max-width: 150px;
  }
}
.nav {
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ul {
    list-style: none;
    padding: 16px;
    text-align: center;
    li {
      color: #000;
      margin-bottom: 32px;
      font-size: 24px;
      font-weight: 600;
      text-transform: uppercase;
      a {
        text-decoration: none;
        color: #000;
        transition: 0.3s;
        &:hover {
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
