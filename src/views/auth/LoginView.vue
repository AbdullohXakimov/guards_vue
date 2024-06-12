<template>
  <div class="bg-yellow-400 h-screen flex justify-center items-center">
    <div class="bg-[#fff] w-[500px] p-10 rounded-2xl">
      <div class="mx-14">
        <h1
          class="font-bold text-center text-3xl mb-5 border-l-8 border-yellow-500"
        >
          CRUD OPERATIONS
        </h1>
      </div>
      <p class="text-center text-[30px] font-bold py-5">Sign In</p>
      <p class="text-center text-[#6C6C6C] mb-10">
        Enter your credentials to access your account
      </p>

      <form @submit.prevent="loginUser" class="flex flex-col gap-5">
        <label class="text-[#6C6C6C]" for="">
          Email
          <input
            v-model="userData.username"
            class="w-full py-3 px-2 border rounded outline-none focus:border-primary"
            type="text"
          />
        </label>
        <label class="text-[#6C6C6C] relative" for="">
          Password
          <input
            v-model="userData.password"
            class="w-full py-3 px-2 border rounded outline-none focus:border-primary"
            :type="password1 ? 'password' : 'text'"
          />
          <span
            @click="password1 = !password1"
            class="absolute right-[10px] top-10"
            ><svg
              v-if="password1"
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
              />
            </svg>
            <svg v-if="!password1"
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="-2 -2 24 24"
            >
              <path
                fill="currentColor"
                d="M9.329 11.885L2.12 19.092a1 1 0 1 1-1.414-1.414l7.324-7.324a2 2 0 0 1 2.322-2.322L17.679.706a1 1 0 0 1 1.414 1.414l-7.208 7.21a2 2 0 0 1-2.556 2.556zm7.54-6.127C18.75 6.842 20 8.34 20 10c0 3.314-4.958 5.993-10 6a14.734 14.734 0 0 1-3.053-.32l1.861-1.86a4 4 0 0 0 5.011-5.011zm-4.16-1.496l-1.834 1.834a4 4 0 0 0-4.779 4.779L2.869 14.1C1.134 13.028 0 11.585 0 10c0-3.314 4.984-6.017 10-6c.914.003 1.827.094 2.709.262"
              /></svg>
            </span>
        </label>

        <h2 v-if="isError" class="text-red-500">Login or Password wrong</h2>

        <button
          class="py-3 px-5 text-xl bg-primary rounded-md mt-4 text-white bg-[#FEAF00] hover:bg-yellow-700"
        >
          SIGN IN
        </button>
      </form>
      <div class="mt-8 flex justify-center gap-2">
        <button class="text-[#6C6C6C]">Forgot your password?</button>
        <button class="text-[#FEAF00]">Reset Password</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import api from "@/api";

import { useRouter } from "vue-router";

const password1 = ref("password");
const router = useRouter();
const isError = ref(false);
const userData = reactive({
  username: "",
  password: "",
});

function notFound() {}

const loginUser = () => {
  api
    .post("/auth/login", userData)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      router.push("/");
      console.log("res", res);
    })
    .catch((err) => {
      console.log("err", err);
      isError.value = true;
    });
};
</script>

<style scoped></style>
