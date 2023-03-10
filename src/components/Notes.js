import notesStore from "../stores/notesStore";
import Note from "./Note";
import "../components/styles/Notes.scss"

export default function Notes() {
  const store = notesStore();

  return (
    <div className="notes">
        <h2>Notes:</h2>
        {store.notes &&
          store.notes.map((note) => {
            return (
              <Note note={note} key={note._id} />
            );
          })
        }
      </div>
  );
}