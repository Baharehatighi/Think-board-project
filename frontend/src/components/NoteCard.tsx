
import type { Note } from "../types/note";
import EditBtn from "./EditBtn";
type Props = {
  note: Note;
};


const NoteCard = ({ note }: Props) => {
  return (
    <div className="bg-gray-700 p-4 rounded-xl shadow">
      <h3 className="font-bold text-white">Title: {note.title}</h3>
      <p className="text-sm text-white"> Content: {note.content}</p>
      <EditBtn/>
    </div>
    
  );
};

export default NoteCard;
