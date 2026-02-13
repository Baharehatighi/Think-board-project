import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getNotes, createNote } from "../api/notes";
import{toast}  from 'react-hot-toast';
type LayoutContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const NotesPage = () => {
  const { isOpen, setIsOpen } =
    useOutletContext<LayoutContextType>();

  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // گرفتن نوت‌ها
  const { data: notes, isLoading, error } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  // ساخت نوت
  const mutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
        toast.success('Note create successfuly');
        
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      setIsOpen(false);
      setTitle("");
      setContent("");
      
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      title,
      description: content,
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading notes</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        All Notes
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {notes?.map((note: any) => (
          <div
            key={note._id}
            className="bg-gray-700 p-4 rounded-xl shadow"
          >
            <h3 className="font-bold">{note.title}</h3>
            <p className="text-sm text-gray-600">
              {note.description}
            </p>
          </div>
        ))}
      </div>

       {isOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-xl w-150">
            <h3 className="text-lg font-semibold mb-4">Create Note</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded bg-gray-400 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 rounded bg-blue-600 text-white"
                >
                  {isLoading ? "Saving..." : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesPage;
