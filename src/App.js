import "bootstrap/dist/css/bootstrap.css";
import TodoCard from "./components/TodoCard";


function App() {
  // Array of objects representing props for TodoCard components
  const todoCards = [
    {
      title: "Task 1",
      desc: "This is task 1 description.",
      priority: "High",
      status: "Completed"
    },
    {
      title: "Task 2",
      desc: "This is task 2 description.",
      priority: "Medium",
      status: "In Progress"
    },
    {
      title: "Task 3",
      desc: "This is task 3 description.",
      priority: "Low",
      status: "Pending"
    }
  ];

  return (
    <>
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
    </>
  );
}

export default App;

