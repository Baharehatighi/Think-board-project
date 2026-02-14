
// import type { Note } from "../types/note";
// import EditBtn from "./EditBtn";
// type Props = {
//   note: Note;
// };


// const NoteCard = ({ note }: Props) => {
//   return (
//     <div className="bg-gray-700 p-4 rounded-xl shadow">
//       <h3 className="font-bold text-white">Title: {note.title}</h3>
//       <p className="text-sm text-white"> Content: {note.content}</p>
//       <EditBtn/>
//     </div>
    
//   );
// };

// export default NoteCard;
import { Edit } from "lucide-react";
import type { Note } from "../types/note";

type Props = {
  note: Note;
  onEdit: (note: Note) => void;
};

const NoteCard = ({ note, onEdit }: Props) => {
  return (
    <div className="bg-gray-700 p-4 rounded-xl shadow">
      <h3 className="font-bold">Title: {note.title}</h3>
      <p className="text-sm mt-2">Content: {note.content}</p>

      <Edit
        className="w-5 cursor-pointer mt-3"
        onClick={() => onEdit(note)}
      />
    </div>
  );
};

export default NoteCard;
