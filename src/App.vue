<script setup>
import Header from '@/components/main/Header.vue';
import Footer from '@/components/main/Footer.vue';
import Main from '@/components/main/main.vue';
</script>

<template>
  <header>
    <Header />
  </header>
  <body>
    <Main />
  </body>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
body {
  margin : 15px;
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
