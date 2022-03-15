import http from "./http.client";
import type { User } from "@/models/User";
import type { UserList } from "@/models/UserList";
import type { FriendRequest } from "@/models/FriendRequest";

export class UserService {
  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<User> {
    const res = await http.post<User>("/users", {
      name: name,
      email: email,
      password: password,
    });
    return res.data;
  }

  async searchUser(name: string): Promise<User> {
    const res = await http.get<User>("/users/search/" + name);
    return res.data;
  }

  async friendRequest(
    myUserUuid: string,
    friendUserUuid: string,
    isAccepted: boolean
  ): Promise<FriendRequest> {
    const res = await http.post<FriendRequest>("/friend-requests", {
      myUserUuid: myUserUuid,
      friendUserUuid: friendUserUuid,
      isAccepted: false,
    });
    return res.data;
  }
}
