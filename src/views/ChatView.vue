<template>
  <input v-model="txtRoomInput" placeholder="Enter room" /> <br />
  <input placeholder="Enter room name" /> <br />
  <button @click="txtRoomListener">Connect</button>
  <div class="card h-200">
    <div class="card-header">Room name</div>
    <div class="card-body" style="min-height: 20rem">
      <div class="overflow-scroll">
        <ul class="list-unstyled">
          <li v-for="(chat, index) in chatStore.chats" v-bind:key="index">
            {{ chat.text }}
          </li>
        </ul>
      </div>
      <input
        class="form-control"
        style="width: 18rem"
        v-model="txtChatInput"
        placeholder="Enter chat"
      />
      <button @click="sendChat">Send</button>
    </div>
  </div>
</template>

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
