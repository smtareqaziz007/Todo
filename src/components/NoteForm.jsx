import React, { useState, useEffect } from "react"
import { uid } from "uid"
import { Input } from "./Input"
import { Select } from "./Select"
import { Modal } from "./Modal"

export const NoteForm = ({ submitNote, defaultNote, label }) => {
  const [note, setNote] = useState({})
  const [resetCounter, setResetCounter] = useState(0)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => reset(), [])

  const reset = () => {
    setNote(
      defaultNote
        ? defaultNote
        : {
            id: uid(),
            title: "",
            desc: "",
            priority: 3,
            status: "Pending",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }
    )
    setResetCounter(resetCounter + 1)
  }
  const onChangeHandler = (e) => {
    switch (e.target.name) {
      case "title":
        setNote({ ...note, title: e.target.value })
        break
      case "desc":
        setNote({ ...note, desc: e.target.value })
        break
      case "priority":
        setNote({ ...note, priority: e.target.value })
        break
      case "status":
        setNote({ ...note, status: e.target.value })
        break
      default:
        break
    }
    console.log(`name: ${e.target.name} | value: ${e.target.value}`)
  }

  const submit = (e) => {
    e.preventDefault()
    submitNote(note)
    reset()
    setShowModal(false)
  }
  return (
    <React.Fragment>
      <button onClick={() => setShowModal(true)}>{label}</button>
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        <form>
          <Input
            label={"Title"}
            fieldName="title"
            onChangeHandler={onChangeHandler}
            defaultValue={note.title}
            resetCounter={resetCounter}
          />
          <Input
            label={"Details"}
            fieldName="desc"
            onChangeHandler={onChangeHandler}
            defaultValue={note.desc}
            resetCounter={resetCounter}
          />
          <Select
            label="Priority"
            fieldName="priority"
            defaultValue={note.priority}
            onChange={onChangeHandler}
            options={[1, 2, 3, 4, 5]}
            resetCounter={resetCounter}
          />
          <Select
            label="Status"
            fieldName="status"
            defaultValue={note.status}
            onChange={onChangeHandler}
            options={["Pending", "InProgress", "Done", "Failed"]}
            resetCounter={resetCounter}
          />

          <button onClick={submit}>Submit</button>
          <button
            onClick={(e) => {
              e.preventDefault()
              reset()
            }}
          >
            Clear
          </button>
        </form>
      </Modal>
    </React.Fragment>
  )
}
