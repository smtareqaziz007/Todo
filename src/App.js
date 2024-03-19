import "bootstrap/dist/css/bootstrap.css";
import TodoCard from "./components/TodoCard";
import { uid } from "uid";

function App() {
  const todoCards = [
    {
      id: uid(),
      title: "Task 1",
      desc: "This is task 1 description.",
      priority: "High",
      status: "Completed",
    },
    {
      id: uid(),
      title: "Task 2",
      desc: "This is task 2 description.",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: uid(),
      title: "Task 3",
      desc: "This is task 3 description.",
      priority: "Low",
      status: "Pending",
    },
  ];

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        My To-do List
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {todoCards.map((todo) => (
          <TodoCard
            key={todo.id}
            title={todo.title}
            desc={todo.desc}
            priority={todo.priority}
            status={todo.status}
          />
        ))}
      </div>
    </>
  );
}

export default App;
