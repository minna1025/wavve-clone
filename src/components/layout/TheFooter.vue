<template>
  <footer class="footer">
    <div class="footer__notice-wrap">
      <div class="footer__notice-container">
        <h3>공지사항</h3>
        <div class="footer__notice-list">
          <Flicking
            :options="{ circular: true, horizontal: false }"
            :plugins="plugins"
          >
            <div
              v-for="(notice, index) in noticeList"
              :key="index"
              class="notice-line"
            >
              {{ notice.text }}
            </div>
          </Flicking>
        </div>
      </div>
    </div>
    <nav class="footer__container">
      <ul class="footer__fnb">
        <li v-for="(item, index) in fnb" :key="index">
          <a @click.stop="moveToMenu(item.link)">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </nav>

    <ul class="footer__info-copyright">
      <li>
        <span>콘텐츠웨이브 주식회사</span>
        <span>대표이사 이태현</span>
        <span
          >고객센터 1599-3709 (평일 09:00~18:00 / 점심시간 12:00~13:00 / 주말 및
          공휴일 휴무)</span
        >
      </li>
      <li>
        <span>사업자등록번호 220-88-38020</span>
        <span>호스팅서비스제공자 : 마이크로소프트 유한회사</span>
      </li>
      <li>
        <span>통신판매업 신고번호 : 제 2021-서울영등포-0585호</span>
        <span
          >통신판매업 정보 공개 :
          <a
            href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020"
            target="_blank"
            class="info-link"
            >http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020</a
          ></span
        >
      </li>
      <li>
        <span
          ><address>
            서울특별시 영등포구 여의나루로 60 포스트타워 19층
          </address></span
        >
        <span
          >전자우편주소 :
          <a href="mailto:helpdesk@wavve.com">helpdesk@wavve.com</a></span
        >
      </li>
      <li class="copyright">
        <span>Copyright© 콘텐츠웨이브(주) All rights reserved.</span>
      </li>
    </ul>
  </footer>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

export default {
  components: {
    Flicking,
  },
  data() {
    return {
      plugins: [new AutoPlay()],
      fnb: [
        { link: "company", text: "회사소개" },
        { link: "recruit", text: "인재채용" },
        { link: "service", text: "서비스 소개" },
        { link: "agreement", text: "이용약관" },
        { link: "privacy", text: "개인정보 처리방침" },
        { link: "notice", text: "고객센터" },
      ],
      noticeList: [
        { text: "HBO시리즈 시청 이벤트 안내", link: "noticeId=2855" },
        {
          text: "wavve오리지널 'MMM: Where are we now' 시청 이벤트 안내",
          link: "noticeId=2850",
        },
        {
          text: "[안드로이드 app] 구글플레이결제 적용 안내",
          link: "noticeId=2848",
        },
      ],
    };
  },
  methods: {
    moveToMenu(targetMenu) {
      console.log(targetMenu);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/layout/_footer";
</style>
