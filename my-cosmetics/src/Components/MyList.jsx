import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RateItem.css';
import '../styles/LeftPanel.css';
import '../styles/MyList.css';

import RateItem from './RateItem.jsx';

export default function MyList({ name, type, list, rank }) {
  
  switch (type) {
    case "ol":
      return (
        <ol className="leftList">
          <RateItem item={name} />
          {list.map((item, index) => <li><Link className='link' to={`/pages/AboutItem/${item.id}`} key={item.id} item={item.capt} ><RateItem key={item} item={item.capt.slice(0, 30) + '...'} /><span style={{ display: "inline-flex" }}>{'   ' + rank[index]?.rank}</span></Link></li>)}
        </ol>
      )
    case "ul":
      return (
        <ul className="leftList">
          <RateItem item={name} />
          {list.map((item) => <RateItem key={item} item={item} />)}
        </ul>
      )
    default:
      return (<></>)
  }
}
