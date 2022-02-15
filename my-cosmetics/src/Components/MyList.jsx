import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RateItem.css';
import '../styles/LeftPanel.css';
import '../styles/MyList.css';

import RateItem from './RateItem.jsx';

export default function MyList({ name, type, list, rank }) {

  switch (type) {
    case "ul":
      return (
        <ul className="leftList">
          <li className="listCaption" >{name}</li>
          {list.map((item, index) => <li key={item.id}><Link className='link' to={`/pages/AboutItem/${item.id}`} key={item.id} item={item.capt} >
            <RateItem key={item} item={item.capt.slice(0, 36) + '...'} />
            <span style={{ display: "inline-flex", margin: "3pt", color: "hotpink" }}>{rank[index].rank + ' ★'}</span>
          </Link>
          </li>)}
        </ul>
      )
    case "ol":
      return (
        <ol className="leftList">
          <RateItem item={name} />
          {list.map((item) => <RateItem key={item} item={item} />)}
        </ol>
      )
    default:
      return (<></>)
  }
}
