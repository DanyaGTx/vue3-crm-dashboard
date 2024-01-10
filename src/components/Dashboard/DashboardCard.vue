<template>
  <div class="mt-5 pb-8 border-b absolute min-[1070px]:w-full">
    <div class="dashboard__grid">
      <div><input type="checkbox" /></div>
      <div class="relative dashboard__company">
        <img src="@/assets/icons/dashboard/companies/apple.svg" alt="apple" />
      </div>
      <div class="text-center text-[#989898] font-semibold">Apple</div>
      <div class="text-center text-[#989898] font-semibold">
        Visual Designer
      </div>
      <div class="text-center text-[#989898] font-semibold">Full time</div>
      <div class="text-center text-[#989898] font-semibold">123456789</div>
      <div class="text-center text-[#989898] font-semibold">
        Phone Interview
      </div>
      <div class="text-center text-[#989898] font-semibold">
        <img src="@/assets/icons/dashboard/edit__icon.svg" alt="Edit" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.dashboard__company::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  display: block;
  border: 1px solid #a2a2a2;
  border-radius: 50%;
}
</style>
