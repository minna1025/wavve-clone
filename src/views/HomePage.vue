<template>
  <section class="home">
    <article>
      <Flicking
        :options="{ circular: true, horizontal: true }"
        :plugins="plugins"
      >
        <div
          class="main-visual"
          v-for="movie in mainVisualList"
          :key="movie.id"
        >
          <img
            class="main-visual-image"
            :src="getImagePath(movie.backdrop_path)"
            :alt="movie.title"
          />
          <h3 class="main-visual-title">{{ movie.title }}</h3>
          <p class="main-visual-subscript">
            {{ movie.overview.slice(0, 50) + "..." }}
          </p>
        </div>
        <span slot="viewport" class="flicking-arrow-prev"></span>
        <span slot="viewport" class="flicking-arrow-next"></span>
        <div slot="viewport" class="flicking-pagination"></div>
      </Flicking>
    </article>
    <section>
      <article class="article_slider">
        <h2 class="article_slider-title">실시간 인기 프로그램</h2>
        <SliderLayout movieType="tv" />
      </article>
    </section>
  </section>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";
import { AutoPlay, Arrow, Pagination } from "@egjs/flicking-plugins";
import { makeImagePath } from "@/libs";
import SliderLayout from "@layout/TheSlider.vue";

export default {
  components: {
    Flicking,
    SliderLayout,
  },
  data() {
    return {
      plugins: [
        new AutoPlay(),
        new Arrow(),
        new Pagination({ type: "bullet" }),
      ],
      mainVisualList: [],
    };
  },
  async created() {
    await this.getMainData();
  },
  methods: {
    async getMainData() {
      this.$store.commit("setIsLoading", true);
      const response = await this.$getMovies("movie");
      if (!response.status_message) {
        const responseData = response.data.results;
        this.mainVisualList = responseData.slice(0, 5);
      } else {
        alert(response.status_message);
      }
      this.$store.commit("setIsLoading", false);
    },
    getImagePath(src) {
      return makeImagePath(src);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/views/_home";
</style>
