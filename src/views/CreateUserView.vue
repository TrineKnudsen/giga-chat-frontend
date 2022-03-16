<template>
  <h2>Let's create a user:</h2>
  <input v-model="inputName" placeholder="Enter name" /> <br />
  <input v-model="inputEmail" placeholder="Enter email" /> <br />
  <input v-model="inputPassword" placeholder="Enter password" /> <br />
  <h6 id="errorField"></h6>
    <button @click="handleCreateUser">Create</button>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/userStore";
import { ref } from "vue";
const userStore = UserStore();
const inputName = ref("");
const inputEmail = ref("");
const inputPassword = ref("");

function handleCreateUser() {
  // if(inputName.value != null && inputPassword.value != null && inputEmail.value != null){
  userStore.createUser(inputName.value, inputEmail.value, inputPassword.value);
  // else {document.getElementById("errorField").innerHTML = "Please fill out all fields";
  // }
}
</script>

<style type="text/css">
button {
  margin: 10px;
}
input {
  margin: 10px;
}
</style>
