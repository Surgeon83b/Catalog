import React, { useState, useEffect } from 'react';
import MyItem from './MyItem.jsx';
import MySelect from './MySelect.jsx';
import '../styles/MySection.css';
import {getPagesCount, getPagesArray} from '../utils/pages.js'

export default function MySection({ name, opt, clname, isDef }) {
 
  const [list, setList] = useState([]);
  const [itemsPP, setItemsPP] = useState(opt[0].value);
  const [pagesCount, setPagesCount] = useState(1)
  const [pagesArray, setPagesArray] = useState([1]);
  const [activePage, setActivePage] = useState(1);

  console.log(pagesCount)
  const getData = (url) => {
    fetch(url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setList(myJson);
      })
  }

  let mas = Array.from(list);
  mas = mas.slice((activePage - 1) * itemsPP, itemsPP);
  // alert('ap', activePage)

  useEffect(() => {
    getData('./Data.json')
    setPagesCount(getPagesCount(list.length, itemsPP))
    setPagesArray(getPagesArray(pagesCount))
  }, [itemsPP])

console.log(list)
  return (
    <>
      {list &&
        <section className="sec1">
          <h3 align="left">{name}<hr align="left"></hr></h3>
          <section className={clname}>
            {mas.map(({ id, capt, imgn, info }) => <MyItem key={id} id={id} caption={capt} imgname={imgn} isDef={isDef} info={info} />)}
          </section>
          <MySelect opt={opt} set={setItemsPP} />
          <div className='pageWrapper'>

            {pagesArray.map(page => <span key={page} className={page == activePage ? 'page page__current' : 'page'} title={page} onClick={(e) => setActivePage(e.target.title)}>{page}</span>)}
          </div>
        </section>
      }
    </>
  )
}
