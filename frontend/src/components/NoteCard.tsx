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
import DeleteBtn from "./DeleteBtn";
import axios from "axios";
import toast from "react-hot-toast";
type Props = {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: number) => void;
};

const NoteCard = ({ note, onEdit }: Props) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/notes/${note._id}`);
      (toast.success("Note Deleted Successfully."), { duration: 5000 });
    } catch (error) {
      toast.error("Failed To Delete Note");
    }
  };
  return (
    <div className="bg-gray-700 p-4 rounded-xl shadow ring-2 ring-blue-500 w-auto">
      <h3 className="font-bold">Title: {note.title}</h3>
      <div className="h-px scale-y-50 bg-gray-50 w-full my-2"></div>
      <p className="text-sm mt-2">Content: {note.content}</p>
      <div className="flex items-center justify-end">
        <div className="flex items-center justify-center w-auto px-1 py-1 gap-x-2 border rounded-lg border-[#e8effa] border-opacity-50">
          <Edit className="w-5 cursor-pointer " onClick={() => onEdit(note)} />
          <div className="h-5 w-px scale-x-50 mx-2 bg-gray-50"></div>
          <DeleteBtn onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
