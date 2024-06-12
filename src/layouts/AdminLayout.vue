<script setup>
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
</script>

<template>
  <main class="flex">
    <div class="w-1/5 h-screen overflow-y-auto">
      <Sidebar />
    </div>
    <div class="w-4/5 h-screen overflow-y-auto bg-[#F8F8F8]">
      <Header />
      <div class="p-5">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
