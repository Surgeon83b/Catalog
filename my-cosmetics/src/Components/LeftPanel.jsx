import React from 'react';
import '../styles/LeftPanel.css';
import MyList from './MyList';

const news = ["Мобильное приложение Mirror Me"];

export default function LeftPanel({ sortedList, sortedArr }) {
  return (
    <section className="leftcol">
      {sortedList?.length && <MyList name="Рейтинг продуктов" type="ul" list={sortedList} rank={sortedArr}></MyList>}
      {/* <MyList name="Новости" type="ul" list={news}></MyList>*/}
    </section>
  )
}

/*useEffect(() => {
  if (list?.length && sortedArr.length) {
    let sortedL = [];
    for (let index = 0; index < list.length; index++) {
      sortedL.push(list?.find(item => item?.id === sortedArr[index]?.id))
    }
    setSortedList(sortedL)
  }
}, [sortedArr, list])*/
