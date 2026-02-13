
import type { Note } from "../types/note";
import NoteCard from "./NoteCard";

type Props = {
  notes: Note[];
};

const NotesList = ({ notes }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
