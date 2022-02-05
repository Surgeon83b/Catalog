import React, { useState, useEffect } from 'react';
import '../styles/MyStars.css';
import { avg } from '../utils/pages';

export default function MyStars({ id, rate, from, change }) {

  const [listofRates, setListofRates] = useState(localStorage[`rate${id}`] !== undefined ? JSON.parse(localStorage[`rate${id}`]) : [])
  const [checkedInput, setCheckedInput] = useState([]);
  const [dis, setDis] = useState(['Ranking', 'Home'].includes(from) ? true : false)

  const addRate = (val) => {
    let mas = listofRates.slice()
    mas.push(val)
    setListofRates(mas)
    localStorage.setItem(`rate${id}`, JSON.stringify(mas))
    change(avg(JSON.parse(localStorage[`rate${id}`])))
  }

  useEffect(() => {
    if (localStorage[`rate${id}`] !== undefined) setListofRates(JSON.parse(localStorage[`rate${id}`]));
  }, [])

  useEffect(() => {
    setCheckedInput([false, false, false, false, false].fill(true, Math.round(rate)))
  }, [rate])

  const retToStars = () => {
    return (
      [5, 4, 3, 2, 1].map((ind) =>
        <>
          <input key={`${id}${ind}`} type="radio" id={`star-${ind}${id}`} name={'rating' + id} value={`${ind}`} disabled={dis} checked={checkedInput[Number(ind)]} onClick={(e) => addRate(e.target.value)}></input>
          <label key={`${id}${ind}${id}`} htmlFor={`star-${ind}${id}`} title={`Оценка ${ind}`}></label>
        </>
      )
    )
  }

  /* const retToStars = () => {
    switch (from) {
      case 'Ranking':
      case 'Home':
        {
          return (
            [5, 4, 3, 2, 1].map((ind) =>
              <>
                <input key={`${id}${ind}`} type="radio" id={`star-${ind}${id}`} name={'rating' + id} value={`${ind}`} disabled={dis} checked={checkedInput[Number(ind)]} onClick={(e) => addRate(e.target.value)}></input>
                <label key={`${id}${ind}${id}`} htmlFor={`star-${ind}${id}`} title={`Оценка ${ind}`}></label>
              </>
            )
          )
          break;
        }
      case 'AboutItem':
      default: {
        return (
          [5, 4, 3, 2, 1].map((ind) =>
            <>
              <input key={`${id}${ind}`} type="radio" id={`star-${ind}${id}`} name={'rating' + id} value={`${ind}`} checked={checkedInput[Number(ind)]} onClick={(e) => addRate(e.target.value)}></input>
              <label key={`${id}${ind}${ind}`} htmlFor={`star-${ind}${id}`} title={`Оценка ${ind}`}></label>
            </>
          )
        )
      }
    }
  } */

  return (
    <div className='rating-area'>
      <p>{rate}</p>
      {retToStars()}
    </div>
  )
}
/*
<input type="radio" id={"star-5" + id} name={'rating' + id} value="5" onClick={(e) => addRate(e.target.value)}></input>
      <label htmlFor={"star-5" + id} title="Оценка «5»"></label>
      <input type="radio" id={"star-4" + id} name={'rating' + id} value="4" onClick={(e) => addRate(e.target.value)}></input>
      <label htmlFor={"star-4" + id} title="Оценка «4»"></label>
      <input type="radio" id={"star-3" + id} name={'rating' + id} value="3" onClick={(e) => addRate(e.target.value)}></input>
      <label htmlFor={"star-3" + id} title="Оценка «3»"></label>
      <input type="radio" id={"star-2" + id} name={'rating' + id} value="2" onClick={(e) => addRate(e.target.value)}></input>
      <label htmlFor={"star-2" + id} title="Оценка «2»"></label>
      <input type="radio" id={"star-1" + id} name={'rating' + id} value="1" onClick={(e) => addRate(e.target.value)}></input>
      <label htmlFor={"star-1" + id} title="Оценка «1»"></label>*/

/*  [5, 4, 3, 2, 1].map((ind) =>
  <>
    <input key={`${id}${ind}`} type="radio" id={`star-${ind}${id}`} name={'rating' + id} value={`${ind}`} onClick={(e) => addRate(e.target.value)}></input>
    <label htmlFor={`star-${ind}${id}`} title={`Оценка ${ind}`}></label>
  </>
)*/
