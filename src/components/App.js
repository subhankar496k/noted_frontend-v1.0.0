// app dependencies
import { useEffect } from "react";
import notesStore from "../stores/notesStore";
import CreateForm from "./CreateForm";
import Notes from "./Notes";
import UpdateForm from "./UpdateForm";

function App() {
  // variables
  const store = notesStore();

  //useEffect
  // runs when the app starts
  useEffect(() => {
    store.fetchNotes();
  }, [] );

  return (
    <div className="App">
      <Notes/>
      <UpdateForm/>
      <CreateForm/>
    </div>
  );
}

export default App;
