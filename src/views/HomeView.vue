<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="email" v-model="inputEmail" placeholder="Email" />
    <br />
    <input
      type="password"
      name="password"
      v-model="inputPassword"
      placeholder="Password"
    />
    <button type="button" @click="login()">Login</button>
  </div>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/userStore";
import { ref } from "vue";
import router from "@/router";

const userStore = UserStore();
const inputEmail = ref("");
const inputPassword = ref("");

function login() {
  userStore.login(inputEmail.value, inputPassword.value);
}
</script>

<style scoped></style>
