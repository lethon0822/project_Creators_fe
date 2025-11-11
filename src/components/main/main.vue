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
</script>

<template>
  <div class="container">
    <div class="top-container">
      <div class="lasted">최신 작품 보기</div>
    </div>
    <swiper
      ref="swiperRef"
      :modules="[Pagination, Autoplay, Navigation]"
      :slides-per-view="3"
      :space-between="5"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: true }"
      :pagination="{ clickable: true }"
      :navigation="true"
      @swiper="swiperRef = $event"
      @mouseenter="swiperRef?.autoplay?.stop()"
      @mouseleave="swiperRef?.autoplay?.start()"
    >
      <swiper-slide v-for="item in source" :key="item.id">
        <a href="12345567890"><img :src="item.image" alt="이미지" /></a>
      </swiper-slide>
      <button class="slide_bt slide_bt_left">
        <img :src="arrow" alt="left" title="left" />
      </button>

      <button class="slide_bt slide_bt_right">
        <img :src="arrow" alt="right" title="right" />
      </button>
    </swiper>

    <div class="grid-container">
      <div v-for="(box, index) in 6" :key="index" class="box">
        <!-- 상단 더보기 버튼 -->
        <div class="header">
          <button class="more-btn">더보기</button>
        </div>

        <!-- 리스트 영역 -->
        <div class="list">
          <ul>
            <li v-for="i in 10" :key="i">항목 {{ i }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 500px); /* 2열 */
  gap: 20px; /* 박스 간격 */
  justify-content: center;
  margin: 50px 150px;
}

.box {
  border: 1px solid #ccc;
}

.header {
  background-color: #f5f1e8;
  display: flex;
  justify-content: flex-end; /* 오른쪽에 버튼 배치 */
  margin-bottom: 5px;
}

.more-btn {
  background-color: #f5f1e8;
  border: 1px solid #f5f1e8;
  padding: 5px 10px;
  font-weight: 700;
  cursor: pointer;
}

.list li {
  border-bottom: 1px solid #eee;
  padding: 4px 0;
  list-style-type: none;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  z-index: 100;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.85);
  border: #e6e6e6;
  border-radius: 50%;
  box-shadow: 0 0 0.8px rgba(0, 0, 0, 0.13);
  cursor: pointer;
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
  width: 1000px;
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

.swiper-container-wrapper {
  position: relative;
  width: 100%;
}

</style>
