<script setup>
import Header from '@/components/main/Header.vue';
import Footer from '@/components/main/Footer.vue';
</script>

<template>
  <header>
    <Header />
  </header>
  <router-view></router-view>  
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
header footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
