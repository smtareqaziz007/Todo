import { Card, Container, Dropdown } from "react-bootstrap";
import bgImage from "../assets/bgBlack.jpg";

function TodoCard({ title, desc, priority, status }) {
  return (
    <Container style={{ maxWidth: "600px", position: "relative" }}>
      <Card
        style={{
          border: "3px solid black",
          position: "relative",
        }}
      >
        <Card.Header
          style={{
            backgroundImage: `url(${bgImage})`,
            // backgroundColor: "lightskyblue",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3>{title}</h3>
          <Dropdown>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
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
      </Card>
    </Container>
  );
}

export default TodoCard;







{/* <>
      <h1 style={{display:"flex" , justifyContent:"center"}} >My To-do List</h1>
      <div style={{ display: "flex", flexDirection: "column" , gap: "20px", justifyContent: "center" }}>
        {todoCards.map((todo, index) => (
          <TodoCard
          key={index} // Ensure each component has a unique key
          title={todo.title}
          desc={todo.desc}
          priority={todo.priority}
          status={todo.status}
          />
          ))}
      </div>
    </> */}