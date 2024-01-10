<template>
  <div class="dashboard">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.dashboard {
  position: relative;
  max-width: 100%;
  min-height: 80vh;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);
  padding-top: 20px;
  overflow: auto;
}
</style>
