import { defineStore } from "pinia";
import type { Chat } from "@/models/Chat";
import { ChatService } from "@/services/chat.service";
import { RoomService } from "@/services/room.service";
import type { Room } from "@/models/Room";

const chatService = new ChatService();
const roomService = new RoomService();

export const ChatStore = defineStore({
  id: "ChatStore",
  state: () => ({
    chats: [{}],
    room: "",
    rooms: [{}],
  }),
  actions: {
    createChat(chat: Chat) {
      chatService.createChat(chat);
      this.chats.push(chat);
    },
    receiveChat(chat: Chat) {
      this.chats.push(chat);
    },
    setRoom(room: string) {
      if (this.room) chatService.disconnectFromRoom(this.room);
      this.room = room;
      chatService.listenToRoom(room, (chat) => {
        this.chats.push(chat);
      });
    },
    createRoom(room: string) {
      roomService
        .createRoom(room)
        .then((room) => this.rooms.push(room))
        .catch((err) => console.log(err));
    },
  },
});
