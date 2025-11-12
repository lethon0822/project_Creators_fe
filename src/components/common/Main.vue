<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import arrow from '@/assets/slider_arrow.svg';

const source = [
  { id: 1, image: 'https://picsum.photos/200/301' },
  { id: 2, image: 'https://picsum.photos/200/302' },
  { id: 3, image: 'https://picsum.photos/200/303' },
  { id: 4, image: 'https://picsum.photos/200/304' },
];

// Swiper 인스턴스 참조
const swiperRef = ref(null);
const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
// 커스텀 버튼 제어
const slidePrev = () => swiperRef.value?.slidePrev();
const slideNext = () => swiperRef.value?.slideNext();
</script>

<template>
  <div class="container">
    <div class="top-container">
      <div class="lasted">최근 작품 보기</div>
    </div>
    <div class="swiper-container-wrap">
      <!-- 왼쪽 버튼 -->
      <button class="swiper_button_prev" @click="slidePrev">
        <img :src="arrow" alt="prev" />
      </button>

      <!-- 스와이퍼 -->
      <div class="swiper-container">
        <swiper
          ref="swiperRef"
          :modules="[Pagination, Autoplay, Navigation]"
          :slides-per-view="3"
          :space-between="10"
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
        >
          <swiper-slide v-for="item in source" :key="item.id">
            <a href="#"><img :src="item.image" alt="이미지" /></a>
          </swiper-slide>
        </swiper>
      </div>

      <!-- 오른쪽 버튼 -->
      <button class="swiper_button_next" @click="slideNext">
        <img :src="arrow" alt="next" />
      </button>
    </div>

    <div class="grid-container">
      <div v-for="(board, index) in 6" :key="index" class="board">
        <!-- 상단 더보기 버튼 -->
        <div class="titleAndMore">
          <div>{{게시판}}</div>
          <button class="more-btn">더보기</button>
        </div>
        <div class="header">
          <div style="width: 100px">번호</div>
          <div style="width: 200px">소분류</div>
          <div style="width: 100%">제목</div>
        </div>

        <!-- 리스트 영역 -->
        <div class="list">
          <div v-for="i in 10" :key="i" style="padding: 5px 10px">
            항목 {{ i }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1024px;
  margin: auto;
}

.top-container {
  display: flex;
  justify-content: center;
}

.lasted {
  width: 250px;
  background-color: #f5f1e8;
  padding: 10px;
  margin: 20px;
  display: flex;
  justify-content: center;
  font-weight: 700;
}

.swiper-container-wrap {
  display: flex;
  align-items: center;
  position: relative;
  max-width: 1000px;
  margin: auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 500px); /* 2열 */
  gap: 20px; /* 박스 간격 */
  justify-content: center;
  margin: 50px 150px;
}

.board {
  border: 1px solid #ccc;
}

.header {
  background-color: #f5f1e8;
  padding: 5px;
  display: flex;
}

.header div {
  display: flex;
  justify-content: center;
}

.titleAndMore {
  background-color: #f5f1e8;
  padding: 5px 10px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.more-btn {
  background-color: #f5f1e8;
  border: 1px solid #f5f1e8;
}

.list div {
  border-bottom: 1px solid #eee;
}

#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #000;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #fff;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 920px;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 300px;
  height: 250px;
  object-fit: cover;
  border: 5px solid #eee;
}

.swiper-container {
  position: relative; /* 내비게이션 위치 기준 */
  margin: auto;
}

.swiper_button_prev,
.swiper_button_next {
  color: #ccc;
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 50%;
  background-color: #f5f1e8;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.swiper_button_prev {
  left: -40px; /* 👉 음수로 줄수록 더 멀리 */
}

.swiper_button_next {
  right: -40px;
}

:deep(.swiper-pagination-bullet) {
  color: #fff !important;
  border: 1px solid #000;
}

.swiper_button_prev {
  transform: rotate(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper_button_prev .swiper_button_next {
  color: #f5f1e8;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
