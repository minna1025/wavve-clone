<template>
  <header class="header">
    <div class="header__login-wrap">
      <ul class="header__login-container">
        <li><router-link to="/">로그인</router-link></li>
        <li><router-link to="/">이용권</router-link></li>
        <li><router-link to="/">이벤트</router-link></li>
      </ul>
    </div>
    <div class="header__menu-wrap">
      <h1 class="header__menu-logo">
        <router-link to="/">wavve</router-link>
      </h1>
      <nav class="header__menu-gnb">
        <template v-for="(item, index) in gnb">
          <a @click.stop="moveToMenu(item.link)" :key="index">
            {{ item.text }}
          </a>
        </template>
      </nav>
      <Layout-Search class="header__menu-search" />
    </div>
  </header>
</template>

<script>
import LayoutSearch from "@components/SearchInput.vue";

export default {
  components: {
    LayoutSearch,
  },
  data() {
    return {
      gnb: [
        { link: "home", text: "홈" },
        {
          link: "category",
          text: "카테고리",
          subMenu: [{ link: "drama", text: "드라마" }],
        },
        { link: "live", text: "LIVE" },
        { link: "my", text: "MY" },
      ],
    };
  },
  methods: {
    moveToMenu(targetMenu) {
      if (targetMenu === "category") return false;
      console.log(targetMenu);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/layout/_header";
</style>
