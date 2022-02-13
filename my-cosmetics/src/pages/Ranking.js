import React, { useState, useEffect, useContext } from 'react';
import '../styles/Ranking.css'
import MySection from '../Components/MySection';
import MyNavPanel from '../Components/MyNavPanel';
import { options } from '../utils/common';
import LeftPanel from '../Components/LeftPanel';
import { MyContext } from '../context/MyContext';

export default function Ranking() {
  const [list, setList] = useContext(MyContext);
  const [foundList, setFoundList] = useState([]);

  const [sortedArr, setSortedArr] = useState([])
  const [sortedList, setSortedList] = useState([])

 /* useEffect(() => {
    setList(MyContext.list);
  }, [])*/

  useEffect(() => {
    let mas = JSON.parse(localStorage.getItem("ranking"));
    if (mas.length)
      setSortedArr(mas.sort((a, b) => b.rank - a.rank))
    else
      setSortedArr(list);
    console.log('LP', sortedArr)
  }, [list])

  useEffect(() => {
    if (list?.length && sortedArr.length) {
      let sortedL = [];
      for (let index = 0; index < list.length; index++) {
        sortedL.push(list?.find(item => item?.id == sortedArr[index]?.id))
      }
      setSortedList(sortedL)
    }
  }, [sortedArr, list])

  console.log('MyContext', MyContext)
  /* useEffect(() => {
     console.log('UE-MainSec')
     getData('../Data.json', setList)
   }, [])*/
  console.log('listinRanking', list)

  return (
    <>
      <MyNavPanel foundList={setFoundList} visible={false} />
      <section className="secondflex">
        {list?.length && <LeftPanel list={list} dataUrl={'/Data.json'} />}
        <section className="mainsec">
          {sortedList?.length && <MySection name="Рейтинг средств" list={sortedList} opt={options(sortedList.length)} clname="sec12" isDef="true" from="Ranking" />}
        </section>
      </section>
    </>
  )
}
