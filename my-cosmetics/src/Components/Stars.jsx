import React from 'react';
import '../styles/Stars.css';

export default function Stars({ id }) {
  return (
    <form key={id}>
      <div class="rating-area">
        <input type="radio" id="star-5" name="rating" value="5"></input>
        <label for="star-5" title="Оценка «5»"></label>
        <input type="radio" id="star-4" name="rating" value="4"></input>
        <label for="star-4" title="Оценка «4»"></label>
        <input type="radio" id="star-3" name="rating" value="3"></input>
        <label for="star-3" title="Оценка «3»"></label>
        <input type="radio" id="star-2" name="rating" value="2"></input>
        <label for="star-2" title="Оценка «2»"></label>
        <input type="radio" id="star-1" name="rating" value="1"></input>
        <label for="star-1" title="Оценка «1»"></label>
      </div>
    </form>
  )
}
