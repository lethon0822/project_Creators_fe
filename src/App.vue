<script setup>
import Header from '@/components/main/Header.vue';
import Footer from '@/components/main/Footer.vue';
import Main from './components/main/main.vue';
</script>

<template>
  <header>
    <Header />
  </header>
  <Main />
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
