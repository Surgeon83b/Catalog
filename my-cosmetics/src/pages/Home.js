import React, { useState, useEffect, useContext } from 'react';
import MainSec from '../Components/MainSec.jsx';
import LeftPanel from '../Components/LeftPanel.jsx';
import MyNavPanel from '../Components/MyNavPanel.jsx';
import '../styles/Home.css';
import { MyContext } from '../context/MyContext.js';
import { setNewRank } from '../utils/common.js';
import { getSortedArr, getSortedList } from '../utils/common.js';

export default function Home() {
  const list = useContext(MyContext);

  const [foundList, setFoundList] = useState([]);
  const [toRender, setToRender] = useState(list);
  const [sortedArr, setSortedArr] = useState([]);
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
    setSortedArr(getSortedArr(list));
  }, [list])

  useEffect(() => {
    setSortedList(getSortedList(list, sortedArr));
  }, [sortedArr, list])

  useEffect(() => {
    setNewRank(list);
    setToRender(list);
  }, [list])

  useEffect(() => {
    setToRender(foundList);
  }, [foundList])

  return (
    <>
      <MyNavPanel foundList={setFoundList} toF="" visible={true} />
      <section className="secondflex">
        <LeftPanel sortedList={sortedList} sortedArr={sortedArr} />
        <MainSec list={toRender} from="Home" isDef={false} />
      </section>
    </>
  )
}
