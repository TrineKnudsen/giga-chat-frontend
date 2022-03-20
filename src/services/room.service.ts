import type { Room } from "@/models/Room";
import http from "./http.client";

export class RoomService {
  async createRoom(room: string, ownerUuid: string): Promise<Room> {
    const res = await http.post<Room>("/rooms", {
      name: room,
      ownerUuid: ownerUuid,
    });
    return res.data;
  }

  async getMyRooms(myUuid: string): Promise<Room[]> {
    const res = await http.get<Room[]>("/rooms/" + myUuid);
    return res.data;
  }
}
