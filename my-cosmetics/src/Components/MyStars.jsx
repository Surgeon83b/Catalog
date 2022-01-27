import React from 'react';
import '../styles/MyStars.css';

export default function MyStars({id}) {
  const checked = (num) => {
   // e.preventDefault();
    alert(id)
  }
  let name='rating'+id;// alert(name);
  return (
    <div className='rating-area'>
      <input type="radio" id="star-5" name={'rating'+id} value="5" onClick={(e)=>checked(e.target.value)}></input>
      <label htmlFor="star-5" title="Оценка «5»"></label>
      <input type="radio" id="star-4" name={'rating'+id} value="4" onClick={(e)=>checked(e.target.value)}></input>
      <label htmlFor="star-4" title="Оценка «4»"></label>
      <input type="radio" id="star-3" name={'rating'+id} value="3" onClick={(e)=>checked(e.target.value)}></input>
      <label htmlFor="star-3" title="Оценка «3»"></label>
      <input type="radio" id="star-2" name={'rating'+id} value="2" onClick={(e)=>checked(e.target.value)}></input>
      <label htmlFor="star-2" title="Оценка «2»"></label>
      <input type="radio" id="star-1" name={'rating'+id} value="1" onClick={(e)=>checked(e.target.value)}></input>
      <label htmlFor="star-1" title="Оценка «1»"></label>
    </div>
  )
}
