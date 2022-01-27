import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';
import MyStars from './MyStars';
import '../styles/MyItem.css';
import '../styles/MyStars.css';

export default function MyItem({ id, caption, imgname, isDef, info }) {

  const [capt, setCapt] = useState('');
  const [sid, setSid] = useState(id);
  // setCapt((capt.length > 40) ? capt.slice(0, 40) + ' ...' : capt);

  useEffect(() => {
    setCapt(String(caption).length > 40 ? String(caption).slice(0, 40) : String(caption));
    setSid(id);
    // alert('useEffect')

  }, [caption])

  return (
    <div className="Rank">
      <div className='new'>
        <MyStars id={id}/>
        <Link to={{ pathname: `/pages/AboutItem/${id}` }}> <img src={imgname} alt={imgname}></img> </Link>
        <p className="caption">{capt}</p>
      </div>
      {isDef && <Description text={info} />}

    </div>
  )
}
