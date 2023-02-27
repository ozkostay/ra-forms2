import './App.css';
import Main from './components/main';
// import Base from './components/base';

const workouts = [];
workouts.push({date: '01.01.2023', distance: 10});
workouts.push({date: '03.01.2023', distance: 11});
workouts.push({date: '02.01.2023', distance: 12});
// Сортируем по дате
workouts.sort((prev, next) => {
  prev = prev.date.slice(6) + prev.date.slice(3, 5) + prev.date.slice(0, 3);
  next = next.date.slice(6) + next.date.slice(3, 5) + next.date.slice(0, 3);
  return prev - next;
});

function App() {
  return (
    <div className="App">
      <Main workouts={workouts}/>
    </div>
  );
}

export default App;
