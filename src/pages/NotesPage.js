// import dependencies
import notesStore from "../stores/notesStore";
import { useEffect } from "react";
import Notes from "../components/Notes";
import CreateForm from "../components/CreateForm";
import UpdateForm from "../components/UpdateForm";

export default function NotesPage() {
  // variables
  const store = notesStore();
  //useEffect
  // runs when the app starts
  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div>
      <Notes />
      <UpdateForm />
      <CreateForm />
    </div>
  );
}
