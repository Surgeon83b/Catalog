import React, { useState, useEffect } from 'react';
import '../styles/Ranking.css'
import MySection from '../Components/MySection';
import MyNavPanel from '../Components/MyNavPanel';
import { getData } from '../utils/pages';
import { options } from '../utils/pages';
import Timer from '../Components/Timer';
import LeftPanel from '../Components/LeftPanel';

export default function Ranking() {
  const [list, setList] = useState([]);
  const [foundList, setFoundList] = useState([]);

  useEffect(() => {
    console.log('UE-MainSec')
    getData('../Data.json', setList)
  }, [])

  return (
    <>
      <MyNavPanel foundList={setFoundList} visible={false} />
      <Timer />
      <section className="secondflex">
        <LeftPanel list={list} dataUrl={'/Data.json'} />
        <section className="mainsec">
          {list.length && <MySection name="Рейтинг средств" list={list} opt={options} clname="sec12" isDef="true" from="Ranking" />}
        </section>
      </section>
    </>
  )
}
