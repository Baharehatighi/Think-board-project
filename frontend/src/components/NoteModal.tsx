import { useState, useEffect } from "react";
import type { Note } from "../types/note";

type Props = {
  mode: "create" | "edit";
  note: Note | null;
  onClose: () => void;
  onSave: (data: { title: string; content: string }) => void;
  isLoading: boolean;
};

const NoteModal = ({
  mode,
  note,
  onClose,
  onSave,
  isLoading,
}: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
useEffect(() => {
  if (mode === "edit" && note !== null) {
    setTitle(note.title);
    setContent(note.content);
  }

  if (mode === "create") {
    setTitle("");
    setContent("");
  }
}, [mode, note]);


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-xl w-96">
        <h3 className="text-lg font-semibold mb-4">
          {mode === "edit" ? "Edit Note" : "Create Note"}
        </h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave({ title, content });
          }}
          className="flex flex-col gap-4"
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border rounded px-3 py-2"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            className="border rounded px-3 py-2"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 bg-gray-500 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="px-3 py-1 bg-blue-600 rounded"
            >
              {isLoading
                ? "Saving..."
                : mode === "edit"
                ? "Update"
                : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;
