import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react"
import { uid } from "uid"
import { TodoTable } from "./components/TodoTable"
import { TodoForm } from "./components/TodoForm";


const mockNotes = [
  {
    id: uid(),
    title: "Note 1",
    desc: "Note 1 description",
    priority: 5,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "Note 1",
    desc: "Note 1 description",
    priority: 5,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "Note 2",
    desc: "Note 2 description",
    priority: 3,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "Note 3",
    desc: "Note 3 description",
    priority: 1,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
]
function App() {
  const [notes, setNotes] = useState(mockNotes)

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const updateNote = (updatedNote) => {
    const newNotes = notes.map((x) => {
      if (x.id === updatedNote.id) {
        x = updatedNote
      }
      return x
    })

    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    setNotes(
      notes.filter((note) => {
        return note.id !== id
      })
    )
  }
  return (
    <>
      <TodoForm submitNote={addNote} label={"Add Note"} />
      <br />
      <TodoTable notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
    </>
  )
}

export default App

