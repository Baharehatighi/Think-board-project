import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getNotes, createNote } from "../api/notes";
import { toast } from "react-hot-toast";

import NoteList from "../components/NotesList";
import NoteModal from "../components/NoteModal";

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

const { data: notes = [], isLoading, error } = useQuery({
  queryKey: ["notes"],
  queryFn: getNotes,
});

  const mutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      toast.success("Note created successfully");

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
      content,
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading notes</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        All Notes
      </h2>

      <NoteList notes={notes} />

      <NoteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        onSubmit={handleSubmit}
        isSaving={mutation.isPending}
      />
    </div>
  );
};

export default NotesPage;
