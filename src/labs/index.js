import { Link } from "react-router-dom";
import Assignment3 from "./a3";

function Labs() {
  return (
    <div>
      <Link to="/labs/a3">A3</Link> |
      <Link to="/hello">Hello</Link> |
      <Link to="/tuiter">Tuiter</Link>
      <Assignment3/>

    </div>
  );
}
export default Labs;
