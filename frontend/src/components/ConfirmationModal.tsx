
interface ConfirmationModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-blue-950 rounded-lg p-6 w-120 text-center">
        <p className="mb-4">{message}</p>
        <div className="flex justify-around gap-4">
          <button
            onClick={onConfirm}
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-400"
          >
           Yes
          </button>
          <button
            onClick={onCancel}
            className="bg-blue-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
