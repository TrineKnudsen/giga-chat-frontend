<template>
<h1>Welcome to rooms</h1>
  <div class="container">
    <h3 class="p-3 text-center"> Here are the existing rooms</h3>
    <table class="table table-striped table-bordered">
        <thead>
          <tr>
              <th>Room id</th>
              <th>Room name</th>

          </tr>
        </thead>
      <tbody>
          <tr v-for="room in rooms" :key="room.id">
            <td>{{room.id}}</td>
            <td>{{room.name}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "App",
  setup() {
    // make users variable reactive with the ref() function
    const rooms = ref([
      { id: 'test123', name: 'Test Room'}
    ]);

    return {
      rooms
    };
  }
}
</script>