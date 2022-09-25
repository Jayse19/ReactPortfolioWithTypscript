import Counter from '../Components/Counter';
import ShowInfo from '../Components/ShowText';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Counter/>
      <div>
        <ShowInfo />
      </div>
    </div>
  );
}

export default App;
