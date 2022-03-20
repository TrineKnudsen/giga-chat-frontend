import { defineStore } from "pinia";
import type { User } from "@/models/User";
import { UserService } from "@/services/user.service";
import { RoomService } from "@/services/room.service";

const userService: UserService = new UserService();
const roomService: RoomService = new RoomService();

export const UserStore = defineStore({
  id: "userStore",
  state: () => ({
    loggedInUser: { name: "", uuid: "" } as User,
    foundUser: { name: "", uuid: "" } as User,
  }),
  getters: {
    userName: (state) => {
      if (state.loggedInUser.name != undefined) return state.loggedInUser.name;
      else return "";
    },
    uuid: (state) => {
      if (state.loggedInUser.name != undefined) return state.loggedInUser.uuid;
    },
    myRooms: (state) => {
      if (state.loggedInUser.name != undefined)
        return roomService.getMyRooms(state.loggedInUser.uuid);
      else return "";
    },
    userFound: (state) => {
      if (state.foundUser.name != undefined) return state.foundUser.name;
      else return "";
    },
  },
  actions: {
    createUser(name: string, email: string, password: string) {
      userService
        .createUser(name, email, password)
        .then((user) => (this.loggedInUser = user))
        .catch((err) => console.log(err));
    },
    searchUser(name: string) {
      userService
        .searchUser(name)
        .then((user) => (this.foundUser = user))
        .catch((err) => console.log(err));
    },
    login(email: string, password: string) {
      userService
        .login(email, password)
        .then((user) => (this.loggedInUser = user))
        .catch((err) => console.log(err));
    },
  },
});
