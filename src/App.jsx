import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Welcome</h1>
      <p>My name is Nirand</p>
      <h2>My favorite food</h2>
      <ul>
        <li>Pizza</li>
        <li>Hamburger</li>
      </ul>

      <h2>My pet</h2>
      <img
        src="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width="250px"
      />
      <h2>Counter</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <p>{count}</p>
    </>
  );
}

export default App;
