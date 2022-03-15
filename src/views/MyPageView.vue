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
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UserStore } from "@/stores/userStore";
import { UserService } from "@/services/user.service";

const userService: UserService = new UserService();
const userStore = UserStore();
const txtSearchInput = ref("");
const confirmation = ref("");

function searchUser() {
  userStore.searchUser(txtSearchInput.value);
}

function friendRequest() {
  confirmation.value = "Friend request send!";
  userService.friendRequest(
    userStore.loggedInUser.uuid,
    userStore.foundUser.uuid,
    false
  );
}
</script>

<style scoped></style>
