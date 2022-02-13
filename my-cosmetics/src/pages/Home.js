import React, { useState, useEffect, useContext } from 'react';
import MainSec from '../Components/MainSec.jsx';
import LeftPanel from '../Components/LeftPanel.jsx';
import MyNavPanel from '../Components/MyNavPanel.jsx';
import '../styles/Home.css';
import { MyContext } from '../context/MyContext.js';
import { setNewRank } from '../utils/common.js';

export default function Home() {
  const [list, setList] = useContext(MyContext);

  const [foundList, setFoundList] = useState([]);
  const [toRender, setToRender] = useState(list);

  useEffect(() => {
    setNewRank(list);
    setToRender(list);
  }, [list, localStorage["ranking"]])

  useEffect(() => {
    setToRender(foundList);
    console.log('isFinding', toRender);
  }, [foundList])

  return (
    <>
      <MyNavPanel foundList={setFoundList} toF="" visible={true} />
      <section className="secondflex">
        <LeftPanel list={list} />
        <MainSec list={toRender} from="Home" isDef={false} />
      </section>
    </>
  )
}
