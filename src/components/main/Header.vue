<script setup>
import logo from '@/assets/logo.png';
import search from '@/assets/search.png';
</script>

<template>
  <div class="container">
    <header>
      <div class="button-wrap">
        <a href="#"><img :src="logo" alt="로고 이미지" class="logo" /></a>
        <div class="left-wrap">
          <a href="#" class="button">작품</a>
          <a href="#" class="button">커뮤니티</a>
          <a href="#" class="button">상점</a>
        </div>
        <div class="search-wrap">
          <div class="search-bar">
            <input type="text" class="search-insert-bar" />
          </div>
          <img :src="search" class="search" />
        </div>
        <div class="right-wrap">
          <a href="#" class="button">마이블로그</a>
          <a href="#" class="button">장바구니</a>
          <a href="#" class="button">로그아웃</a>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  background-color: #f5f1e8;
  border-bottom: 1px solid #000;
  align-items: center;
  justify-content: space-evenly;
  z-index: 10;
}

.button-wrap {
  display: flex;
  align-items: center;
}

.logo {
  height: 60px;
  padding: 0 30px 0 70px;
}

.search-wrap {
  display: flex;
  margin: 0 100px;
}

.search-bar {
  display: flex;
  background-color: #fff;
  width: 300px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
}

.search-insert-bar {
  border: transparent;
  width: 300px;
}

.search {
  height: 20px;
  padding: 5px;
}

.button {
  padding: 10px;
  color: #000;
  text-decoration-line: none;
}
</style>
