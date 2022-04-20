import React from 'react'
import "./Puntuacion.css"

const Puntuacion = () => {
  return (
    <div>
      <form>
        <p class="clasificacion"></p>
        <input id="radio5" type="radio" name="score" value="10"></input>
        <label for="radio5">★</label>
        <input id="radio4" type="radio" name="score" value="20"></input>
        <label for="radio4">★</label>
        <input id="radio3" type="radio" name="score" value="30"></input>
        <label for="radio3">★</label>
        <input id="radio2" type="radio" name="score" value="40"></input>
        <label for="radio2">★</label>
        <input id="radio1" type="radio" name="score" value="50"></input>
        <label for="radio1">★</label>

      </form>
    </div>
  )
}

export default Puntuacion