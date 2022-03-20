<template>
  <h1>Welcome to rooms</h1>
  <div class="container">
    <h3 class="p-3 text-center">Here are the existing rooms</h3>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Room id</th>
          <th>Room name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(room, index) in rooms" v-bind:key="index">
          <td>{{ room.uuid }}</td>
          <td>{{ room.name }}</td>
        </tr>
      </tbody>
    </table>
    <input
      class="form-control"
      style="width: 18rem"
      v-model="txtNewRoom"
      placeholder="Room name"
    />
    <button @click="createRoom">Create room</button>
    <input
      class="form-control"
      style="width: 18rem"
      v-model="txtSelectedRoom"
      placeholder="Room name"
    />
    <button @click="listenToRoom">Connect</button>
  </div>

  <div class="card h-200">
    <div class="card-header">{{ chatStore.room }}</div>
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
  <h3 v-for="(room, index) in userStore.myRooms" v-bind:key="index">
    User found: {{ room }}
  </h3>
</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chatStore";
import { UserStore } from "@/stores/userStore";
import { RoomService } from "@/services/room.service";
import type { Room } from "@/models/Room";
import { ref } from "vue";
import type { Ref } from "vue";
const txtNewRoom = ref("");
const chatStore = ChatStore();
const userStore = UserStore();
const roomService = new RoomService();
const txtSelectedRoom = ref("");
const txtChatInput = ref("");
let rooms: Ref<Room[]> = ref([]);

roomService.getMyRooms(userStore.loggedInUser.uuid).then((room) => {
  rooms.value = room;
});

function createRoom() {
  roomService
    .createRoom(txtNewRoom.value, userStore.loggedInUser.uuid)
    .then((room) => rooms.value.push(room));
}

function sendChat() {
  chatStore.createChat({
    text: txtChatInput.value,
    room: chatStore.room,
  });
}

function connectToRoom() {
  chatStore.setRoom(txtSelectedRoom.value);
}
</script>
