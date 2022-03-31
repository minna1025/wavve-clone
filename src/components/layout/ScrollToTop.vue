<template>
  <div
    class="button-top"
    :class="{ 'button-top--show': showButtonTop }"
    @click="scrollToTop"
  >
    <p>▲</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollDebounceFunction: () => {},
      showButtonTop: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollEvent);
  },
  methods: {
    scrollEvent() {
      clearTimeout(this.scrollDebounceFunction);
      this.scrollDebounceFunction = setTimeout(() => {
        const windowInnerHeight = window.innerHeight;
        const scrollY = window.scrollY;
        this.showButtonTop = windowInnerHeight * 0.2 <= scrollY;
      }, 500);
    },
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/layout/scrollToTop";
</style>
