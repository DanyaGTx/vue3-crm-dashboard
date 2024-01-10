<template>
  <div class="flex">
    <SideBar />
    <div class="px-10 py-6 w-full overflow-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from './components/SideBar/SideBar.vue';
</script>

<style scoped></style>
