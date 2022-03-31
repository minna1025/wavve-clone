<template>
  <Flicking
    class="slider"
    :options="{
      align: 'prev',
      circularFallback: 'bound',
      bound: true,
      panelsPerView: 5,
    }"
    :plugins="plugins"
  >
    <div class="slide" v-for="movie in movieList" :key="movie.id">
      <div class="slide-image">
        <img
          :src="getImagePath(movie.poster_path)"
          :alt="movie.title ? movie.title : movie.name"
        />
      </div>
      <p class="slide-title">{{ movie.title ? movie.title : movie.name }}</p>
    </div>
    <span slot="viewport" class="flicking-arrow-prev"></span>
    <span slot="viewport" class="flicking-arrow-next"></span>
  </Flicking>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import { makeImagePath } from "@/libs";

export default {
  components: {
    Flicking,
  },
  props: {
    movieType: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      plugins: [new Arrow({ moveCount: 5 })],
      movieList: [],
    };
  },
  async created() {
    await this.getMovieData();
  },
  methods: {
    async getMovieData() {
      const response = await this.$getMovies(this.movieType);
      if (!response.status_message) {
        const responseData = response.data.results;
        this.movieList = responseData;
      } else {
        alert(response.status_message);
      }
    },
    getImagePath(src) {
      return makeImagePath(src, "w500");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/layout/slider";
</style>
