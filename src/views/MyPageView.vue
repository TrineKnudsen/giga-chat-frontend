<template>
  <div class="input-box">
    <input
      v-model="txtSearchInput"
      type="text"
      placeholder="Search for user"
      class="form-control"
    />
    <button class="btn-primary" @click="searchUser">Search</button> <br />
  </div>
  <div class="list border-bottom">
    <div class="d-flex flex-column ml-3">
      <h3 v-if="userStore.userFound.length > 0">
        User found: {{ userStore.userFound }}
        <button class="btn-secondary" @click="friendRequest">
          Become friends
        </button>
      </h3>
      <h4>{{ confirmation.valueOf() }}</h4>
    </div>
  </div>
  <h3 class="p-3 text-center">Friend requests:</h3>
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>Username</th>
        <th>Accept / Decline</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="request in requests" v-bind:key="request.senderUserName">
        <td>{{ request.senderUserName }}</td>
        <td>
          <button
            @click="
              userService.acceptFriend(
                userStore.loggedInUser.uuid,
                request.senderUserName
              )
            "
          >
            Accept
          </button>
          <button @click="declineFriendRequest">Decline</button>
          {{ friendAccept.valueOf() }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { UserStore } from "@/stores/userStore";
import { UserService } from "@/services/user.service";
import type { FriendRequest } from "@/models/FriendRequest";
import { ref } from "vue";

const userService: UserService = new UserService();
const userStore = UserStore();
const txtSearchInput = ref("");
const confirmation = ref("");
const friendAccept = ref("");
let requests: Ref<FriendRequest[]> = ref([]);

userService.getFriendRequests(userStore.loggedInUser.uuid).then((request) => {
  requests.value = request;
});

function searchUser() {
  if (userStore.loggedInUser.name.length < 0) {
    userStore.searchUser(txtSearchInput.value);
  } else confirmation.value = "You need to log in to do this";
}

function friendRequest() {
  confirmation.value = "Friend request send!";
  userService.friendRequest(
    userStore.loggedInUser.name,
    userStore.foundUser.uuid,
    false
  );
}

function declineFriendRequest() {}
</script>

<style scoped></style>
