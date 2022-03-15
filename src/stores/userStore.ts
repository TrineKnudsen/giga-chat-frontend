import { defineStore } from "pinia";
import type { User } from "@/models/User";
import { UserService } from "@/services/user.service";

const userService: UserService = new UserService();

export const UserStore = defineStore({
  id: "userStore",
  state: () => ({
    loggedInUser: { name: "" } as User,
    foundUser: { name: "", uuid: "" } as User,
  }),
  getters: {
    userName: (state) => {
      if (state.loggedInUser.name != undefined) return state.loggedInUser.name;
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
  },
});
