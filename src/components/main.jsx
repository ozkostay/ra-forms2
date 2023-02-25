import React from 'react';
import './main.css'

export default function Main({workouts}) {
  console.log('workouts', workouts);
  // input 215*106
  return <main className="main">
    <div className="inputs">
      <div className="titleTop">
        <span class="titlespan">Дата (ДД.ММ.ГГ)</span>
        <input  class="titleinput" type="text" name="date"/>
      </div>
      <label className="titleTop">
        <span class="titlespan">Пройдено км</span>
        <input  class="titleinput" type="text" name="distance"/>
      </label>
      <div className="titleButton">
        <span class="titlespan">o</span>
        <button class="titleinput">ОК</button>
      </div>
      
    </div>
    <div className="titleWorkouts">
      <div className="titleWork">Дата (ДД.ММ.ГГ)</div>
      <div className="titleWork">Пройдено км</div>
      <div className="titleWork">Действия</div>
    </div>
    
    <div className="workouts">
      <div className="wrapperWorkout">
        <div className="dataWo">12.01.2022</div>
        <div className="dataWo">10.2</div>
        <div className="dataWo">
          <div class="simbol">✎</div><div class="simbol">✘</div>
        </div>
      </div>
      <div className="wrapperWorkout">
        <div className="dataWo">12.01.2022</div>
        <div className="dataWo">10.2</div>
        <div className="dataWo">
          <div class="simbol">✎</div><div class="simbol">✘</div>
        </div>
      </div>
      <div className="wrapperWorkout">
        <div className="dataWo">12.01.2022</div>
        <div className="dataWo">10.2</div>
        <div className="dataWo">
          <div class="simbol">✎</div><div class="simbol">✘</div>
        </div>
      </div>
    </div>

  </main>
}