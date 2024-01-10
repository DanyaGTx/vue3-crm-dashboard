<template>
  <div
    class="menu bg-[#2F76E6] min-h-screen transition-[min-width] ease-linear flex justify-center items-end overflow-hidden relative"
  >
    <img
      class="absolute top-7 circle-image"
      src="../../assets/images/avatar.jpg"
      alt="avatar"
    />

    <div class="menu__list flex flex-col gap-9 justify-end items-center mb-8">
      <router-link
        v-for="link in sideBarLinks"
        :key="link.id"
        class="menu__item"
        :to="{ name: link.redirectName }"
      >
        <img width="24" height="24" :src="link.icon" :alt="link.title" />
        <p
          class="menu__item-text animate__animated animate__backInRight animate__faster"
        >
          {{ link.title }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'animate.css';
import { sideBarLinks } from './links';
</script>

<style scoped>
.menu {
  min-width: 85px;
}
.menu:hover {
  min-width: 170px;
}
.menu:hover .menu__item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 17px;
}
.menu__item-text {
  color: white;
  font-weight: 600;
  display: none;
}
.menu:hover .menu__item-text {
  display: block;
}

.circle-image {
  border-radius: 50%;
  object-fit: cover;
  width: 70px;
  height: 70px;
  transition: transform 0.4s;
}

.menu:hover .circle-image {
  transform: scale(1.6);
}
</style>
