import React, { useState, useEffect, useContext } from 'react';
import '../styles/MyStars.css';
import { avg } from '../utils/pages';
import { MyContext } from '../context/MyContext';
import { setNewRank } from '../utils/common';

export default function MyStars({ id, rate, from, change }) {

  const [list, setList] = useContext(MyContext);
  const [listofRates, setListofRates] = useState(localStorage[`rate${id}`] !== undefined ? JSON.parse(localStorage[`rate${id}`]) : [])
  const [checkedInput, setCheckedInput] = useState([]);
  const [dis, setDis] = useState(['Ranking', 'Home'].includes(from) ? true : false)

  const addRate = (val) => {
    let mas = listofRates.slice()
    mas.push(val)
    setListofRates(mas)
    localStorage.setItem(`rate${id}`, JSON.stringify(mas))
    change(avg(JSON.parse(localStorage[`rate${id}`])))
    setNewRank(list);
  }

  useEffect(() => {
    if (localStorage[`rate${id}`] !== undefined) setListofRates(JSON.parse(localStorage[`rate${id}`]));
  }, [])

  useEffect(() => {
    setCheckedInput([false, false, false, false, false].fill(true, Math.round(rate)))
  }, [rate, listofRates])

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

  return (
    <div className='rating-area'>
      <p style={{ color: "hotpink", fontWeigh: "bold", fontSize: "12pt" }}>{rate}</p>
      {retToStars()}
    </div>
  )
}
