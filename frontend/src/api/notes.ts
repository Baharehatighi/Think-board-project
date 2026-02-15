import api from "./axios";

import type { Note } from "../types/note";


// گرفتن همه نوت‌ها
export const getNotes = async (): Promise<Note[]> => {
  const res = await api.get("/notes");
  return res.data.data;
};

// گرفتن یک نوت
export const getNoteById = async (id: string): Promise<Note> => {
  const res = await api.get(`/notes/${id}`);
  return res.data;
};

// ساخت نوت جدید
export const createNote = async (data: Pick<Note, "title" | "content">): Promise<Note> => {
  const res = await api.post("/notes", data);
  return res.data;
};

// آپدیت نوت
export const updateNote = async ({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: string;
}) => {
  const res = await api.put(`/notes/${id}`, {
    title,
    content,
  });

  return res.data;
};
