import api from "./axios";

export interface Note {
  _id: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

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
export const createNote = async (data: Pick<Note, "title" | "description">): Promise<Note> => {
  const res = await api.post("/notes", data);
  return res.data;
};

// آپدیت نوت
export const updateNote = async (
  id: string,
  data: Pick<Note, "title" | "description">
): Promise<Note> => {
  const res = await api.put(`/notes/${id}`, data);
  return res.data;
};

// حذف نوت
export const deleteNote = async (id: string): Promise<void> => {
  await api.delete(`/notes/${id}`);
};
