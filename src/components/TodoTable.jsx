import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Card, Button, Form, Dropdown } from "react-bootstrap";
import { BsTrash } from 'react-icons/bs';

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

export const TodoTable = ({ notes, updateNote, deleteNote }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const filteredNotes = notes.filter(note =>
    (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.desc.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterStatus === "" || note.status === filterStatus)
  );

  const handleFilterSelect = (status) => {
    setFilterStatus(status);
    setSelectedFilter(status);
  };

  const clearFilter = () => {
    setFilterStatus("");
    setSelectedFilter("");
  };

  return (
    <div className="container mt-4">
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ border: "1px solid black" }}
        />
      </Form>
      <div className="d-flex align-items-center mb-3">
        <Dropdown className="me-3">
          <Dropdown.Toggle variant="dark" id="status-filter-dropdown">
            {selectedFilter || "Status Filter"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleFilterSelect("Done")}>Done</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterSelect("Pending")}>Pending</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterSelect("In Progress")}>In Progress</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterSelect("Failed")}>Failed</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {selectedFilter && (
          <Button variant="outline-secondary" onClick={clearFilter}>Clear Filter</Button>
        )}
      </div>
      <div className="row">
        {filteredNotes.map((note, i) => (
          <div key={i} className="col-md-6 mb-4">
            <TodoCard note={note} updateNote={updateNote} deleteNote={deleteNote} />
          </div>
        ))}
      </div>
    </div>
  );
};
