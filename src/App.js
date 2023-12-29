
import './App.css';
import {Header} from "./components/header";

function App() {
  console.log(123);
  return (<>
    <div className="App">
      <Header />
      <div className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
    </>
  );
}

export default App;
