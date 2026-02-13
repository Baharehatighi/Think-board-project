type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  setTitle: (value: string) => void;
  setContent: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSaving: boolean;
};

const NoteModal = ({
  isOpen,
  onClose,
  title,
  content,
  setTitle,
  setContent,
  onSubmit,
  isSaving,
}: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-xl w-150">
        <h3 className="text-lg font-semibold mb-4">Create Note</h3>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
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
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-400 text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSaving}
              className="px-4 py-2 rounded bg-blue-600 text-white"
            >
              {isSaving ? "Saving..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;
