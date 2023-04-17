<script setup>
import Footer from "./components/Footer.vue";
import NavHeader from "./components/NavHeader.vue";
</script>

<template>
  <NavHeader />
  <router-view></router-view>
  <Footer />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
