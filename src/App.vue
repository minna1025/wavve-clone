<template>
  <div id="app">
    <Layout-Header />
    <main class="main">
      <router-view />
    </main>
    <Layout-Footer />
    <ScrollToTop />
    <p class="loading-template" v-show="isLoading">loading...</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LayoutHeader from "@layout/TheHeader.vue";
import LayoutFooter from "@layout/TheFooter.vue";
import ScrollToTop from "@layout/ScrollToTop.vue";

export default {
  name: "App",
  components: {
    LayoutHeader,
    LayoutFooter,
    ScrollToTop,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.isLoading,
    }),
  },
  watch: {
    isLoading(val) {
      if (val) document.querySelector("body").classList.add("scrollLock");
      else document.querySelector("body").classList.remove("scrollLock");
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import "assets/scss/main";
</style>
