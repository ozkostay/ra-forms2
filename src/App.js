import './App.css';
import Main from './components/main';
import Base from './components/base';

const base = new Base();
const workouts = {...base.workouts};

function App() {
  return (
    <div className="App">
      <Main workouts={workouts}/>
    </div>
  );
}

export default App;
