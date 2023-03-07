// app dependencies
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  //States
  // state to save the fetchNotes function
  const [notes, setNotes] = useState(null);
  // state for the form to create data
  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
  });
  //state for the form to update data
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: "",
  });


  //useEffect
  // runs when the app starts
  useEffect(() => {
    fetchNotes();
  }, []);


  // Functions
  // the fetchNotes function
  const fetchNotes = async () => {
    // fetch the notes (getting the notes)
    const res = await axios.get("http://localhost:3000/notes");
    // Set to state (setting the notes)
    setNotes(res.data.notes);
  };

  // function to update the form otherwise the textfields dont work
  const updateCreateFormField = (e) => {
    const { name, value } = e.target;
    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  // submit function for the form
  const createNote = async (e) => {
    e.preventDefault();
    // Create the note
    const res = await axios.post("http://localhost:3000/notes", createForm);

    // Update state
    setNotes([...notes, res.data.note]);

    //Clear from state
    setCreateForm({ title: "", body: "" });
  };

  // Function to delete note
  const deleteNote = async (_id) => {
    // Delete the note
    await axios.delete(`http://localhost:3000/notes/${_id}`);

    // Update state
    const newNotes = [...notes].filter((note) => {
      return note._id !== _id;
    });
    setNotes(newNotes);
  };

  // Function to handle the change in the update form
  const handleUpdateFieldChange = (e) => {
    const { value, name } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  // Function that shows the data of the note to be updated inside the update form
  const toggleUpdate = (note) => {
    // Set state on update form
    setUpdateForm({ title: note.title, body: note.body, _id: note._id });
  };

  // Function for updating the note
  const updateNote = async (e) => {
    e.preventDefault();
    // extracting title and body from the form
    const {title, body} = updateForm;

    // Send the update request
    const res = await axios.put(`http://localhost:3000/notes/${updateForm._id}`, {title, body})

    // Update state
    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => {
      return note._id === updateForm._id;
    });
    newNotes[noteIndex] = res.data.note;
    setNotes(newNotes);

    // Clear textarea (update form state)
    setUpdateForm({
      _id: null,
      title: "",
      body: "",
    });
  };

  return (
    <div className="App">
      <div>
        <h2>Notes:</h2>
        {notes &&
          notes.map((note) => {
            return (
              <div key={note._id}>
                <h3>{note.title}</h3>
                <button onClick={() => deleteNote(note._id)}>
                  Delete note
                </button>
                <button onClick={() => toggleUpdate(note)}>Update note</button>
              </div>
            );
          })}
      </div>

      {updateForm._id && (
        <div>
          <h2>Update note</h2>
          <form onSubmit={updateNote}>
            <input
              onChange={handleUpdateFieldChange}
              value={updateForm.title}
              name="title"
            />
            <textarea
              onChange={handleUpdateFieldChange}
              value={updateForm.body}
              name="body"
            />
            <button type="submit">Update note</button>
          </form>
        </div>
      )}

      {!updateForm._id && (
        <div>
          <h2>Create note</h2>
          <form onSubmit={createNote}>
            <input
              onChange={updateCreateFormField}
              value={createForm.title}
              name="title"
            />
            <textarea
              onChange={updateCreateFormField}
              value={createForm.body}
              name="body"
            />
            <button type="submit">Create note</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
