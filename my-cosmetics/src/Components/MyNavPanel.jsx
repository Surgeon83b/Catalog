import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MyNavPanel.css';
import { pages } from '../utils/pages';
import { getData } from '../utils/pages';
import MainSec from './MainSec';

export default function MyNavPanel({isFinding, foundList, visible}) {
  const [list, setList] = useState([])

  const find = (e) => {
    if (e.key === 'Enter') {
      let str = e.target.value;
      let findItems = [];
      console.log(list)
      list.map((item, index) => (item.capt.includes(str)) ? findItems.push(item) : console.log('not', index))
      console.log('find', findItems);
      foundList(findItems)
      isFinding(true)
    }
  }

  useEffect(() => {
    getData('./Data.json', setList)
  }, [])

  return (
    <nav>
      <ul className="navitems">
        <li className="item"> <Link to='/' >{pages.p1}</Link> </li>
        <li className="item"> <Link to='/pages/Ranking' >{pages.p2}</Link> </li>
        <li className="item"> <Link to='/pages/Contacts' >{pages.p3}</Link></li>
        <li className="itemmark"> <input size="20" placeholder="Поиск" type={visible ? "text" : "hidden"} onKeyPress={(e) => find(e)}></input> </li>
      </ul>
    </nav>
  )
}

//list.map((item, index) => item.capt.includes(str) ? alert('yes', item.id) : {})
