"use strict";(self["webpackChunkwavve_clone"]=self["webpackChunkwavve_clone"]||[]).push([[208],{3208:function(t,s,i){i.r(s),i.d(s,{default:function(){return f}});var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"home"},[i("article",[i("Flicking",{attrs:{options:{circular:!0,horizontal:!0},plugins:t.plugins}},[t._l(t.mainVisualList,(function(s){return i("div",{key:s.id,staticClass:"main-visual"},[i("img",{staticClass:"main-visual-image",attrs:{src:t.getImagePath(s.backdrop_path),alt:s.title}}),i("h3",{staticClass:"main-visual-title"},[t._v(t._s(s.title))]),i("p",{staticClass:"main-visual-subscript"},[t._v(" "+t._s(s.overview.slice(0,50)+"...")+" ")])])})),i("span",{staticClass:"flicking-arrow-prev",attrs:{slot:"viewport"},slot:"viewport"}),i("span",{staticClass:"flicking-arrow-next",attrs:{slot:"viewport"},slot:"viewport"}),i("div",{staticClass:"flicking-pagination",attrs:{slot:"viewport"},slot:"viewport"})],2)],1),i("section",[i("article",{staticClass:"article_slider"},[i("h2",{staticClass:"article_slider-title"},[t._v("실시간 인기 프로그램")]),i("SliderLayout",{attrs:{movieType:"tv"}})],1)])])},e=[],l=i(4304),n=i(7370),r=i(9245);function o(t,s){return`https://image.tmdb.org/t/p/${s||"original"}/${t}?api_key=${r.$h}&language=ko&append_to_response=images&include_image_language=ko`}var c=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("Flicking",{staticClass:"slider",attrs:{options:{align:"prev",circularFallback:"bound",bound:!0,panelsPerView:5},plugins:t.plugins}},[t._l(t.movieList,(function(s){return i("div",{key:s.id,staticClass:"slide"},[i("div",{staticClass:"slide-image"},[i("img",{attrs:{src:t.getImagePath(s.poster_path),alt:s.title?s.title:s.name}})]),i("p",{staticClass:"slide-title"},[t._v(t._s(s.title?s.title:s.name))])])})),i("span",{staticClass:"flicking-arrow-prev",attrs:{slot:"viewport"},slot:"viewport"}),i("span",{staticClass:"flicking-arrow-next",attrs:{slot:"viewport"},slot:"viewport"})],2)},u=[],p={components:{Flicking:l.m},props:{movieType:{type:String,require:!0}},data(){return{plugins:[new n.Eh({moveCount:5})],movieList:[]}},async created(){await this.getMovieData()},methods:{async getMovieData(){const t=await this.$getMovies(this.movieType);if(t.status_message)alert(t.status_message);else{const s=t.data.results;this.movieList=s}},getImagePath(t){return o(t,"w500")}}},g=p,v=i(1001),m=(0,v.Z)(g,c,u,!1,null,"18501296",null),d=m.exports,h={components:{Flicking:l.m,SliderLayout:d},data(){return{plugins:[new n.il,new n.Eh,new n.tl({type:"bullet"})],mainVisualList:[]}},async created(){await this.getMainData()},methods:{async getMainData(){this.$store.commit("setIsLoading",!0);const t=await this.$getMovies("movie");if(t.status_message)alert(t.status_message);else{const s=t.data.results;this.mainVisualList=s.slice(0,5)}this.$store.commit("setIsLoading",!1)},getImagePath(t){return o(t)}}},w=h,_=(0,v.Z)(w,a,e,!1,null,"31712f82",null),f=_.exports}}]);
//# sourceMappingURL=208.425e46a3.js.map