import './App.scss';
import MeteoWidget from '../MeteoWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
Ma météo
      </header>
      <main className="App-main">
<MeteoWidget city="Groix" temperature="21°" />
      </main>
    </div>
  );
}

export default App;
