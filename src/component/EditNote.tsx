import { useNavigate } from "react-router-dom";
import { NoteData, Tag } from "../App";
import { useNote } from "./NoteLayout";
import { NoteForm } from "./utils/NoteForm";

type EditNoteProps = {
  onUpdate: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function EditNote({ onUpdate, onAddTag, availableTags }: EditNoteProps) {
  const note = useNote();
  const navigate = useNavigate();
  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onUpdate(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
      {navigate("..")}
    </>
  );
}
