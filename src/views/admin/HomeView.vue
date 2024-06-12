<script setup>
import INsideHome from "../../components/INsideHome.vue";

const datas = [
  {
    bg: "bg-[#F0F9FF]",
    img: "first.png",
    word: "Students",
    number1: "243",
  },
  {
    bg: "bg-[#FEF6FB]",
    img: "first.png",
    word: "Course",
    number1: "13",
    
  },
  {
    bg: "bg-[#FEFBEC]",
    img: "first.png",
    word: "Payments",
    number1: "INR 556,000",
  },
  {
    bg: "bg-[#FEAF00]",
    img: "first.png",
    word: "Users",
    number1: "3",
  },
  
];
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <template v-for="(item, index) in datas" :key="index">
      <INsideHome :item />
    </template>
  </div>
</template>

<style scoped></style>
