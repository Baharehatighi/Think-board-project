import ConfirmationModal from "../components/ConfirmationModal";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getNotes, createNote, updateNote } from "../api/notes";
import type { Note } from "../types/note";
import { toast } from "react-hot-toast";
import NoteList from "../components/NotesList";
import NoteModal from "../components/NoteModal";
import { Plus } from "lucide-react";




// const handleSave = (data: { title: string; content: string }) => {
//   setPendingData(data);
//   setConfirmOpen(true); // باز کردن confirmation
// };

const NotesPage = () => {
const [confirmOpen, setConfirmOpen] = useState(false);
const [pendingData, setPendingData] = useState<{ title: string; content: string } | null>(null);

  const queryClient = useQueryClient();
  const [mode, setMode] = useState<"create" | "edit" | null>(null);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const { data: notes = [], isLoading } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  const createMutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      toast.success("Note created");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      setMode(null);
      setSelectedNote(null);
    },
  });

  const updateMutation = useMutation<
    unknown,
    Error,
    { id: string; title: string; content: string }
  >({
    mutationFn: updateNote,
    onSuccess: () => {
      toast.success("Note updated");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      setMode(null);
      setSelectedNote(null);
    },
  });

  if (isLoading) return <p>Loading...</p>;

  return (


    <div className="max-w-6xl mx-auto px-6 mt-6">

      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-semibold">All Notes</h2>
        <button
          onClick={() => {
            setMode("create");
            setSelectedNote(null);
          }}
          className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-xl hover:bg-blue-400 transition"
        >
          <Plus size={18}/>
          New Note
        </button>
        
      </div>


      <NoteList
        notes={notes}
        onEdit={(note) => {
          setSelectedNote(note);
          setMode("edit");
        }}
      />


      {mode && (
        <><NoteModal
  mode={mode}
  note={selectedNote}
  isLoading={
    mode === "edit"
      ? updateMutation.isPending
      : createMutation.isPending
  }
  onClose={() => {
    setMode(null);
    setSelectedNote(null);
  }}
  onSave={(data) => {

    setPendingData(data);
    setConfirmOpen(true);
  }}
/>

          <ConfirmationModal
            isOpen={confirmOpen}
            message={mode === "edit"
              ? "Are you sure wanna edit this note..?"
              : "Are you sure wanna create new note..?"}
            onConfirm={() => {
              if (!pendingData) return;
              if (mode === "edit" && selectedNote) {
                updateMutation.mutate({ id: selectedNote._id, ...pendingData });
              } else {
                createMutation.mutate(pendingData);
              }
              setConfirmOpen(false);
              setPendingData(null);
              setMode(null);
              setSelectedNote(null);
            } }
            onCancel={() => {
              setConfirmOpen(false);
              setPendingData(null);
            } } />
            </>
      )}
    </div>
  );
};

export default NotesPage;
