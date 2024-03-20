import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsTrash } from 'react-icons/bs';
import { TodoForm } from "./TodoForm";

const TodoCard = ({ note, updateNote, deleteNote }) => {
  return (
    <Card className="shadow-sm rounded">
      <Card.Body>
        <Card.Title className="fw-bold">{note.title}</Card.Title>
        <Card.Text>{note.desc}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className={`badge bg-${note.priority === "High" ? "danger" : note.priority === "Low" ? "primary" : "warning"}`}>{note.priority}</span>
            <span className={`badge bg-${note.status === "Done" ? "success" : note.status === "Failed" ? "danger" : "primary"} ms-2`}>{note.status}</span>
          </div>
          <div>
            <TodoForm submitNote={updateNote} defaultNote={note} label={"Update"} />
            <Button className="btn btn-danger ms-2" onClick={() => deleteNote(note.id)}><BsTrash/></Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TodoCard;
