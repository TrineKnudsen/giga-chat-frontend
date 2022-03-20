import http from "./http.client";
import type { User } from "@/models/User";
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
    senderUserName: string,
    receiverUserUuid: string,
    isAccepted: boolean
  ): Promise<FriendRequest> {
    const res = await http.post<FriendRequest>("/friend-requests", {
      senderUserName: senderUserName,
      receiverUserUuid: receiverUserUuid,
      isAccepted: false,
    });
    return res.data;
  }

  async getFriendRequests(receiverUserUuid: string): Promise<FriendRequest[]> {
    const res = await http.get<FriendRequest[]>(
      "/friend-requests/" + receiverUserUuid
    );
    return res.data;
  }

  async login(email: string, password: string): Promise<User> {
    const res = await http.post<User>("/users/login", {
      email: email,
      password: password,
    });
    return res.data;
  }

  async acceptFriend(receiverUuid: string, senderUserName: string) {
    const res = await http.post<FriendRequest>("/users/accFriend", {
      receiverUserUuid: receiverUuid,
      senderUserName: senderUserName,
    });
    return res.data;
  }
}
