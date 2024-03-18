import Card from "react-bootstrap/Card";

function TodoCard({ title, desc }) {
  return (
    <Card>
      <Card.Header>
        <h3>{title}</h3>
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{desc}</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default TodoCard;
