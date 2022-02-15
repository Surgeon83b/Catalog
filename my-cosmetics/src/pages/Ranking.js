import React, { useState, useEffect, useContext } from 'react';
import '../styles/Ranking.css'
import MySection from '../Components/MySection';
import MyNavPanel from '../Components/MyNavPanel';
import { options, getSortedArr } from '../utils/common';
import LeftPanel from '../Components/LeftPanel';
import { MyContext } from '../context/MyContext';
import { getSortedList } from '../utils/common';


export default function Ranking() {
  const list = useContext(MyContext);

  const [sortedArr, setSortedArr] = useState([])
  const [sortedList, setSortedList] = useState([])

  useEffect(() => {
    setSortedArr(getSortedArr(list));
  }, [list])

  useEffect(() => {
    setSortedList(getSortedList(list, sortedArr));
  }, [sortedArr, list])

  console.log('MyContext', MyContext)
  /* useEffect(() => {
     console.log('UE-MainSec')
     getData('../Data.json', setList)
   }, [])*/
  console.log('sortedArr', sortedArr)
  console.log('sortedListinRanking', sortedList)
  console.log('ListinRanking', list)

  return (
    <>
      <MyNavPanel visible={false} />
      <section className="secondflex">
        {sortedList?.length && <LeftPanel sortedList={sortedList} sortedArr={sortedArr}/>}
        <section className="mainsec">
          {sortedList?.length && <MySection name="Рейтинг средств" list={sortedList} opt={options(sortedList.length)} clname="sec12" isDef="true" from="Ranking" />}
        </section>
      </section>
    </>
  )
}
