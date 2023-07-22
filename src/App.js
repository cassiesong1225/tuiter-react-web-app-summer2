import logo from './logo.svg';
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import './App.css';

function App() {
  return (
      <div className="container">
        <HelloWorld/>
        <h1>Hello World!</h1>
        <Labs/>
        <Tuiter/>
      </div>


  );
}

export default App;
