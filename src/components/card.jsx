import React from 'react';

export default function Card({item, fnDel}) {
  return <>
    <div className="wrapperWorkout">
      <div className="dataWo idDate">{item.date}</div>
      <div className="dataWo">{item.distance}</div>
      <div className="dataWo">
        <div className="simbol">✎</div><div className="simbol" onClick={fnDel} data-id={item.date}>✘</div>
      </div>
    </div>
  </>
}