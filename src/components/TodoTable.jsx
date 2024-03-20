import React from "react";
import { TodoForm } from "./TodoForm";
import { Card, Button } from "react-bootstrap";

const TodoCard = ({ note, updateNote, deleteNote }) => {
  return (
    <Card className="shadow-sm rounded">
      <Card.Body>
        <Card.Title className="fw-bold">{note.title}</Card.Title>
        <Card.Text>{note.desc}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className={`badge bg-${note.priority >= 4 ? "danger" : "primary"}`}>{note.priority}</span>
            <span className={`badge bg-${note.status === "Done" ? "success" : "primary"} ms-2`}>{note.status}</span>
          </div>
          <div>
            <TodoForm submitNote={updateNote} defaultNote={note} label={"Update"} />
            <button className="btn btn-danger ms-2" onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const TodoTable = ({ notes, updateNote, deleteNote }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {notes.map((note, i) => (
          <div key={i} className="col-md-6 mb-4">
            <TodoCard note={note} updateNote={updateNote} deleteNote={deleteNote} />
          </div>
        ))}
      </div>
    </div>
  );
};