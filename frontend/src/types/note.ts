
export interface Note {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
export const getNotes = async (): Promise<Note[]> => {
  const res = await axios.get("/notes");
  return res.data;
}
import axios from "axios";
export const updateNote = async ({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: string;
}) => {
  const res = await axios.put(`/notes/${id}`, {
    title,
    content,
  });

  return res.data;
};
