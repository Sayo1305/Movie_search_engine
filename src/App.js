import './App.css';
import Search from './components/Search';
function App() {
  const url = "https://www.omdbapi.com/?apikey=58dc59dc";
  return (
    <div className="App">
      <div className="head">
        MoviesMania
      </div>
      <Search url={url}/>
    </div>
  );
}

export default App;
