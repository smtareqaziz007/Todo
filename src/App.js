import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { uid } from "uid";
import { TodoTable } from "./components/TodoTable";
import { TodoForm } from "./components/TodoForm";

function App() {
  const mockNotes = [
    {
      id: uid(),
      title: "Note 1",
      desc: "Note 1 description",
      priority: 5,
      status: "Pending",
      createdAt: "2024-03-12T05:19:29.533Z",
      updatedAt: "2024-03-12T05:19:29.533Z",
    }
  ]

  const [notes, setNotes] = useState(() => {
    // Retrieve notes from localStorage if they exist, or use mockNotes
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : mockNotes;
  });

  useEffect(() => {
    // Update localStorage whenever notes change
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const updateNote = (updatedNote) => {
    const newNotes = notes.map((note) => (note.id === updatedNote.id ? updatedNote : note));
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
      <TodoForm submitNote={addNote} label={"+ Add Note"} />
      <br />
      <TodoTable notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
