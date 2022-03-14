<template>
  <input v-model="txtSearchInput" placeholder="Search for user" />
  <button @click="searchUser">Search</button>
</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chatStore";
import { ref } from "vue";

const chatStore = ChatStore();
const txtSearchInput = ref("");

function searchUser() {
  chatStore.searchUser({ text: txtSearchInput.value });
}
</script>

<style scoped></style>
