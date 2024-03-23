import React, { useState } from "react";
import { Form, Dropdown, Button } from "react-bootstrap";
import TodoCard from "./TodoCard";

export const TodoTable = ({ notes, updateNote, deleteNote }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const filteredNotes = notes.filter(
    (note) =>
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
            <Dropdown.Item onClick={() => handleFilterSelect("Done")}>
              Done
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterSelect("Pending")}>
              Pending
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterSelect("In Progress")}>
              In Progress
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterSelect("Failed")}>
              Failed
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {selectedFilter && (
          <Button variant="outline-secondary" onClick={clearFilter}>
            Clear Filter
          </Button>
        )}
      </div>
      <div className="row">
        {filteredNotes.map((note, i) => (
          <div key={i} className="col-md-6 mb-4">
            <TodoCard
              note={note}
              updateNote={updateNote}
              deleteNote={deleteNote}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
