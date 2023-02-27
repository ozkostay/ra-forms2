import React, { useState } from 'react';
import Card from './card';
import './main.css'

export default function Main({workouts}) {
  // console.log('workouts', workouts);
  
  const [ramWorkouts, setRamWorkouts] = useState(workouts);
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');
  
  function fnDate(event) {
    setDate(event.target.value);
  }

  function fnDistance(event) {
    setDistance(event.target.value);
  }

  function fnDeleteRow(event, date) {
    const element = event.target
    const tempWorkouts = [...ramWorkouts];
    const idx = ramWorkouts.findIndex((item) => item.date === element.dataset.id);
    if (idx > -1) {
      tempWorkouts.splice(idx, 1);
      setRamWorkouts(tempWorkouts);
    }
  }

  function addInBase(date, distance) {
    const obj = {};
    const tempWorkouts = [...ramWorkouts];
    // Ищем такую же дату
    const find = tempWorkouts.findIndex((item) => item.date === date);
    if ( find < 0) {
      obj.date = date; // Далее если нет
      obj.distance = Number(distance);
      tempWorkouts.push(obj);  
    } else {
      tempWorkouts[find].distance += Number(distance); // Если есть
    }
    return tempWorkouts;
  }

  function addWorkout() {
    const newArr = addInBase(date, distance);
    // Сортируем по дате
    newArr.sort((prev, next) => {
      prev = prev.date.slice(6) + prev.date.slice(3, 5) + prev.date.slice(0, 3);
      next = next.date.slice(6) + next.date.slice(3, 5) + next.date.slice(0, 3);
      return prev - next;
    });
    if (newArr) {
      setRamWorkouts(newArr);
      setDate('');
      setDistance('');
    } else {
      alert('Не правильный формат даты');
    }
  }

  return <main className="main">
    <div className="inputs">
      <label className="titleTop">
        <span className="titlespan">Дата (ДД.ММ.ГГ)</span>
        <input  className="titleinput" type="text" value={date} onChange={fnDate}/>
      </label>
      <label className="titleTop">
        <span className="titlespan">Пройдено км</span>
        <input  className="titleinput" type="text" value={distance} onChange={fnDistance}/>
      </label>
      <div className="titleButton">
        <span className="titlespan">o</span>
        <button className="titleinput" onClick={addWorkout}>ОК</button>
      </div>
    </div>
    <div className="titleWorkouts">
      <div className="titleWork">Дата (ДД.ММ.ГГ)</div>
      <div className="titleWork">Пройдено км</div>
      <div className="titleWork">Действия</div>
    </div>
    <div className="workouts">
      {ramWorkouts.map((item, index) => {
          return <Card item={item} fnDel={fnDeleteRow} key={index}/>
        })
      }
    </div>
 </main>
}
