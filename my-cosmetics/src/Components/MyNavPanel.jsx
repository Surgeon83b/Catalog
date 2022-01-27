import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MyNavPanel.css';
import { pages } from '../utils/pages';

export default function MyNavPanel() {
  return (
    <nav>
      <ul className="navitems">
        <li className="item"> <Link to='/' >{pages.p1}</Link> </li>
        <li className="item"> <Link to='/pages/Ranking' >{pages.p2}</Link> </li>
        <li className="item"> <Link to='/pages/Contacts' >{pages.p3}</Link></li>
        <li className="itemmark"> <input size="20" placeholder="Поиск"></input> </li>
      </ul>
    </nav>
  )
}
