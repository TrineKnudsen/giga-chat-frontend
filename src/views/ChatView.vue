<template></template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chatStore";
import { ref } from "vue";

const chatStore = ChatStore();
const txtChatInput = ref("");
const txtRoomInput = ref("");
const txtRoomListener = ref("");

function listenToRoom() {
  chatStore.setRoom(txtRoomListener.value);
}

function sendChat() {
  chatStore.createChat({ text: txtChatInput.value, room: txtRoomInput.value });
}
</script>

<style scoped></style>
