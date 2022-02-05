import React, { useState, useEffect } from 'react';
import MainSec from '../Components/MainSec.jsx';
import LeftPanel from '../Components/LeftPanel.jsx';
import MyNavPanel from '../Components/MyNavPanel.jsx';
import '../styles/Home.css';
import { getData, avg, setRankMas } from '../utils/pages.js';
import Timer from '../Components/Timer.jsx';

export default function Home() {
  const [list, setList] = useState([]);
  const [len, setLen] = useState(0);
  const [isFinding, setIsFinding] = useState(false)
  const [foundList, setFoundList] = useState([]);
  const [toRender, setToRender] = useState([])

  const setF = (val) => {
    setIsFinding(val)
  }

  useEffect(() => {
    getData('./Data.json', setList)
  }, [])

  useEffect(() => {
    setLen(list.length)
    console.log(setRankMas(list.length))
  }, [list])

  useEffect(() => {
    setToRender(isFinding ? foundList : list);
    console.log('isFinding', toRender)
  }, [isFinding, list])

  useEffect(() => {
    if (localStorage["ranking"] == undefined) {

      localStorage.setItem("ranking", JSON.stringify(setRankMas(list.length)))
    }

    let mas = JSON.parse(localStorage["ranking"]);
    console.log('mas', mas)
    let rank;

    for (let id = 0; id < list.length; id++) {

      if (localStorage[`rate${id + 1}`] !== undefined)
        rank = avg(JSON.parse(localStorage[`rate${id + 1}`]))
      else rank = 0;
      //  console.log(rank)
      localStorage.setItem("ranking", JSON.stringify(mas.map((item) => item.id == id + 1 ? { ...item, rank: rank } : item)))
      mas = mas.map((item) => item.id == id + 1 ? { ...item, rank: rank } : item);
      console.log('zap', JSON.stringify(mas.map((item) => item.id == id + 1 ? { ...item, rank: rank } : item)))
    }
  }, [list])

  console.log('list', list)
  console.log('toRender', toRender)

  return (
    <>
      <MyNavPanel isFinding={setF} foundList={setFoundList} visible={true} />
      <Timer />
      <section className="secondflex">
        <LeftPanel list={list} dataUrl='./Data.json' />
        <MainSec list={toRender} from="Home" isDef={false} />
      </section>
    </>
  )
}

