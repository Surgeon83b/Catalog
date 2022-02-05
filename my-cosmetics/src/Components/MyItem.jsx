import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';
import MyStars from './MyStars';
import '../styles/MyItem.css';
import '../styles/MyStars.css';
import { avg } from '../utils/pages';

export default function MyItem({ id, caption, imgname, isDef, info, from, nRate }) {

  const [capt, setCapt] = useState('');
  const [rate, setRate] = useState(0);
  
  const newRate = (rate) => {
    setRate(rate)
  }

  useEffect(() => {
    setCapt(String(caption).length > 40 ? String(caption).slice(0, 40) : String(caption));
    //  console.log('UE-MyItem')
  }, [caption])

  useEffect(() => {
    if (localStorage[`rate${id}`]) {
      setRate(avg(JSON.parse(localStorage[`rate${id}`])))
      //  let mas = JSON.parse(localStorage['ranking']);
      //  localStorage.setItem['ranking'](mas.map((item) => item.id == id ? {...item, rank: avg(JSON.parse(localStorage[`rate${id}`]))} : item))
      //  console.log(JSON.parse(localStorage[`rate${id}`]))
    }
    else {
      setRate(0);
    }

  }, [id])

  useEffect(() => {
    if ((from !== "Ranking") && (from !== "Home"))
      nRate(id)
    //   setLofR(lofR?.map((item) => item.id == id ? {...item, rank: rate} : item)) 
  }, [rate, id])

  return (
    <div className="Rank">
      <div className='new'>
        <MyStars id={id} rate={rate} from={from} change={newRate} />
        <Link to={{ pathname: `/pages/AboutItem/${id}` }}> <img src={imgname} alt={imgname}></img> </Link>
        <p className="caption">{capt}</p>
      </div>
      {isDef && <Description text={info} />}
    </div>
  )
}
