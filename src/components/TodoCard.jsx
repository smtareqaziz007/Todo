import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { BsTrash } from 'react-icons/bs';
import { TodoForm } from "./TodoForm";

const TodoCard = ({ note, updateNote, deleteNote }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteNote(note.id);
    setShowModal(false); // Close the modal after deletion
  };

  return (
    <>
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
            <Button className="btn btn-danger ms-2" onClick={() => setShowModal(true)}><BsTrash/></Button>
          </div>
        </div>
      </Card.Body>
    </Card>

    { showModal &&
      <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Modal.Footer>
     </Modal>
    }
    </>
  );
};

export default TodoCard;
