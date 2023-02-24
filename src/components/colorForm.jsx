import React, {useState} from "react";
import './colorForm.css';
import HexToRgb from "./hexToRgb";

export default function ColorForm () {

  const [bodyColor, setBodyColor] = useState('#9921ff');
  const [rgbColor, setRgbColor] = useState('rgb(153,33,255)');

  function onChangeHex (event) {
    const hex = event.target.value;
    if (hex.length < 7) {
      setBodyColor(hex);
      return;
    }
    setBodyColor(hex);
    const rgb = HexToRgb(hex);
    const rgbInput = document.querySelector('.rgbColor');
    if (rgb) {
      // Если всё хорошо
      document.body.style.background = hex; // меняем цвет body
      setRgbColor(`rgb(${rgb.r},${rgb.g},${rgb.b})`); // пишем в input rgbcolor
      rgbInput.style.backgroundColor = '#55038e';
    } else {
      // Если при вводе ошибка
      setRgbColor("Ошибка");
      rgbInput.setAttribute('background-color', 'red'); // 
      rgbInput.style.backgroundColor = '#80291e';
      document.body.style.background = '#ea4b35';
    }
  }

  return <div className="inputForm">
    <form>
      <label>
        <input className="inputColor" type="text" value={bodyColor} onChange= {onChangeHex} name="hexcolor"/>
      </label>
      <label>
        <input className="rgbColor" type="text" value={rgbColor} name="rgbcolor"/>
      </label>
    </form>
  </div>
}
