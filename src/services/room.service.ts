import type { Room } from "@/models/Room";
import http from "./http.client";

export class RoomService {
  async createRoom(room: string): Promise<Room> {
    const res = await http.post<Room>("/rooms", {
      name: room,
    });
    return res.data;
  }
}
