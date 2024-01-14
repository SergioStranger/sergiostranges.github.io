<template>
  <header-box/>
  <div class="container d-flex flex-grow-1 align-items-center">
    <router-view/>
  </div>
</template>

<script setup>
import HeaderBox from "@/components/HeaderBox.vue";
</script>

<style lang="scss">

</style>
