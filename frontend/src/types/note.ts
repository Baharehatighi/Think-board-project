import axios from "axios";
export interface Note {
  _id: string;
  title?: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
}
export const getNotes = async (): Promise<Note[]> => {
  const res = await axios.get("/notes");
  return res.data;
}