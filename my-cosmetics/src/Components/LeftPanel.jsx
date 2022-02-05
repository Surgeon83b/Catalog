import React, { useState, useEffect } from 'react';
import '../styles/LeftPanel.css';
import MyList from './MyList';

const news = ["Мобильное приложение Mirror Me"];

export default function LeftPanel({ list, dataUrl }) {

  const [sortedArr, setSortedArr] = useState([])
  const [sortedList, setSortedList] = useState([])

  useEffect(() => {
    let mas = JSON.parse(localStorage.getItem("ranking"));
    setSortedArr(mas.sort((a, b) => b.rank - a.rank))
    console.log('LP', sortedArr)
  }, [list])

  useEffect(() => {
    if (list.length && sortedArr.length) {
      let sortedL = [];
      for (let index = 0; index < list.length; index++) {
        sortedL.push(list.find(item => item.id == sortedArr[index].id))
      }
      setSortedList(sortedL)
    }
  }, [sortedArr, list])

  console.log('sorted', sortedList)

  return (
    <section className="leftcol">
      {sortedList.length && <MyList name="Рейтинг средств" type="ol" list={sortedList} rank={sortedArr}></MyList>}
      {/* <MyList name="Новости" type="ul" list={news}></MyList>*/}
    </section>
  )
}
