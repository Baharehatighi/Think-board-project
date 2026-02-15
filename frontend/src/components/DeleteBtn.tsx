import { Trash2 } from "lucide-react";
import { useState } from "react";

type DeleteBtnProps = {
  onDelete: () => void;
};

const DeleteBtn = ({ onDelete }: DeleteBtnProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Trash2
        className="w-5 cursor-pointer text-white hover:text-blue-500"
        onClick={() => setOpen(true)}
      />

      {open && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Are you sure you want to delete this note?
            </h3>

            <div className="modal-action">
              <button
                type="button"
                className="btn bg-blue-500 hover:bg-blue-600"
                onClick={() => {
                  onDelete();
                  setOpen(false);
                }}
              >
                Yes
              </button>

              <button
                type="button"
                className="btn"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteBtn;
