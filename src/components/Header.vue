<script setup>
import { reactive } from 'vue';
import logo from '@/assets/logo.png';
import search from '@/assets/search.png';
</script>

<template>
  <div class="container">
    <div class="button-wrap">
      <a href="#"><img :src="logo" alt="로고 이미지" class="logo" /></a>
      <div class="left-wrap">
        <a href="#" class="button">작품</a>
        <a href="#" class="button">커뮤니티</a>
        <a href="#" class="button">상점</a>
      </div>
      <div class="search-wrap">
        <input type="text">
        <img :src="search" class="search"/>
      </div>
      <div class="right-wrap">
        <a href="#" class="button">마이블로그</a>
        <a href="#" class="button">장바구니</a>
        <a href="#" class="button">로그아웃</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  background-color: #f5f1e8;
  border-bottom: 1px solid #000;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
}

.button-wrap {
  display: flex;
  align-items: center;
}

.logo {
  height: 80px;
  padding: 0 30px 0 70px;
}

.search-wrap {
  margin: 0 100px;
}

.search-bar {
}

.search {
  height: 20px;
  padding: 5px;
}

.button {
  padding: 10px;
}
</style>
