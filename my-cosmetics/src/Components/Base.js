import React from 'react';
import LeftPanel from './LeftPanel.jsx';
import Timer from './Timer';

export default function Base(props) {
  let dUrl;
  switch (props.from) {
    case 'Home': dUrl = './Data.json'; break;
    case 'AboutItem': dUrl = '/Data.json'; break;
    case 'Ranking': dUrl = '/Data.json'; break;
    case 'Contacts': dUrl = '/Data.json'; break;
    default:
      dUrl = 'Data.json';
  }

  return (
    <>
      <Timer />
      <section className="secondflex">
        <LeftPanel dataUrl={dUrl} />
        {props.add}
      </section>
    </>
  )
}
