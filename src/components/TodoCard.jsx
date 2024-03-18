import { Card, Container, Button, Dropdown } from "react-bootstrap";
import { useState } from "react";
import bgImage from "../assets/bgBlack.jpg"; // Assuming bgBlack.jpg is located in the same directory as this component

function TodoCard({ title, desc, priority, status }) {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <Container style={{ maxWidth: "600px", position: "relative" }}>
      <Card
        style={{ border: "3px solid black", position: "relative", cursor: "pointer" }}
        onClick={toggleButtons}
      >
        <Card.Header
          style={{ backgroundImage: `url(${bgImage})`, color: "white", display: "flex", justifyContent: "space-between" }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3>{title}</h3>
          <Dropdown>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M8 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Header>
        <Card.Body>
          <blockquote className="mb-0">
            <p>{desc}</p>
          </blockquote>
          <div className="row">
            <div className="col">
              <strong>Priority:</strong> {priority}
            </div>
            <div className="col">
              <strong>Status:</strong> {status}
            </div>
          </div>
        </Card.Body>
        {showButtons && (
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <Button variant="primary" className="mr-2" onClick={(e) => e.stopPropagation()}>Edit</Button>
            <Button variant="danger" onClick={(e) => e.stopPropagation()}>Delete</Button>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default TodoCard;
