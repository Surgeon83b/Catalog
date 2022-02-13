import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/MyNavPanel.css';
import { pages } from '../utils/pages';
import { MyContext } from '../context/MyContext';
import { RouterUrl } from '../routes';

export default function MyNavPanel({ foundList, toF, visible }) {

  const [list, setList] = useContext(MyContext);
  const [toFind, setToFind] = useState('');

  useEffect(() => {
    if (toFind == '') {
      if (foundList) foundList(list)
    }
  }, [toFind])

  const find = (val) => {
    setToFind(val);
    let str = val.toLowerCase();
    let findItems = [];
    list.map((item, index) => (item.capt.toLowerCase().includes(str)) ? findItems.push(item) : console.log('not', index))
    foundList(findItems)

  }
  console.log('def', toFind)

  return (
    <nav>
      <ul className="navitems">
        <li className="item"> <NavLink to={RouterUrl.Homepage} exact={true} onClick={() => setToFind('')} className={({ isActive }) => (isActive ? "active" : "myLink")}>{pages.p1}</NavLink> </li>
        <li className="item"> <NavLink to={RouterUrl.Ranking} className={({ isActive }) => (isActive ? "active" : "myLink")}>{pages.p2}</NavLink> </li>
        <li className="item"> <NavLink to={RouterUrl.Contacts} className={({ isActive }) => (isActive ? "active" : "myLink")}>{pages.p3}</NavLink></li>
        <li className="itemmark"> <input size="20" placeholder="🔍︎ Поиск" type={visible ? "text" : "hidden"} value={toFind} onChange={(e) => setToFind(e.target.value)} onKeyPress={(e) => (e.key === 'Enter') ? find(e.target.value) : {}}></input> </li>
      </ul>
    </nav >
  )
}

//setToFind('') foundList(list)
