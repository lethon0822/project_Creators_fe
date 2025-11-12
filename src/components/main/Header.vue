<script setup>
import { ref } from 'vue';
import logo from '@/assets/logo.png';
import search from '@/assets/search.png';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const source = [
  { id: 1, key: '가죽공예' },
  { id: 2, key: '목공예' },
  { id: 3, key: '자개공예' },
  { id: 4, key: '뜨개공예' },
];
</script>

<template>
  <div class="container">
    <!-- 햄버거 버튼 -->
    <button class="menu-toggle" @click="toggleMenu">☰</button>
    <!-- 사이드 메뉴 -->
    <div class="side-menu" :class="{ open: menuOpen }">
      <button class="close-btn" @click="toggleMenu">✕</button>
      <div style="margin-top: 20px">[게시판]</div>
      <ul class="board_list" v-for="item in source" :key="item.id">
        <li>
          <a href="#" style="text-decoration-line: none">{{ item.key }}</a>
        </li>
      </ul>
    </div>

    <!-- 배경 블러 / 클릭시 닫기 -->
    <div class="overlay" v-if="menuOpen" @click="toggleMenu"></div>
    <header>
      <div class="button-wrap">
        <a href="/"><img :src="logo" alt="로고 이미지" class="logo" /></a>
        <div class="left-wrap">
          <a href="/" class="button">작품</a>
          <a href="/" class="button">커뮤니티</a>
          <a href="/" class="button">상점</a>
        </div>
        <div class="search-wrap">
          <div class="search-bar">
            <input type="text" class="search-insert-bar" />
          </div>
          <img :src="search" class="search" />
        </div>
        <div class="right-wrap">
          <router-link to="/login" class="button">마이블로그</router-link>
          <router-link to="/login" class="button">장바구니</router-link>
          <router-link to="/login" class="button">로그인</router-link>
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
  justify-content: center;
  z-index: 10;
}

.menu-toggle {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #000;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

/* 사이드 메뉴 */
.side-menu {
  position: fixed;
  top: 0;
  left: -250px; /* 기본적으로 화면 밖 */
  width: 250px;
  height: 100%;
  background: #fff;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease;
  z-index: 1000;
  padding: 20px;
}

/* 메뉴 열렸을 때 */
.side-menu.open {
  left: 0;
}

/* 닫기 버튼 */
.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

ul .board_list {
  display: flex;
  height: fit-content;
  font-size: 18px;
}

/* 메뉴 리스트 */
.side-menu ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.side-menu li {
  margin: 15px 0;
}

/* 오버레이 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
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
