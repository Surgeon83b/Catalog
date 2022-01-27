import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RateItem.css';
import '../styles/LeftPanel.css';
import '../styles/MyList.css';

import RateItem from './RateItem.jsx';

export default function MyList({ name, type, list }) {
  switch (type) {
    case "ol":
      return (
          <ol className="leftList">
            <RateItem item={name} />
            {list.map((item, index) => <Link className='link' to={`/pages/AboutItem/${index + 1}`} key={index} item={item.capt} ><RateItem key={item} item={item.capt.slice(0, 30) + '...'} /></Link>)}
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
