import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      this is home page
      <button type="button" onClick={() => setCount(count + 1)}>
        add
      </button>
      <div>count is {count}</div>
      <Link to={"/about"}>to about page</Link>
    </div>
  );
};

export default Home;
