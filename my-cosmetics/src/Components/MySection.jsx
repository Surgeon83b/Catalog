import React, { useState, useEffect } from 'react';
import MyItem from './MyItem.jsx';
import MySelect from './MySelect.jsx';
import '../styles/MySection.css';
import { getPagesCount, getPagesArray } from '../utils/pages.js'

export default function MySection({ name, list, opt, clname, isDef, from }) {

  const [iPPaPC, setIPPaPC] = useState({})
  const [pagesArray, setPagesArray] = useState(getPagesArray(1));
  const [activePage, setActivePage] = useState(1);
  const [curMas, setCurMas] = useState([]);

  const setIPPandPC = (val) => {
    setIPPaPC({ iPP: val, pC: getPagesCount(list.length, val) })
    setActivePage(1)
  }

  useEffect(() => {
    setPagesArray(getPagesArray(iPPaPC.pC))
  }, [iPPaPC.pC])

  useEffect(() => {
    setIPPaPC({ iPP: list.length, pC: 1 });
  }, [list])

  useEffect(() => {
    let mas = Array.from(list)
    if (from !== "Ranking")
      mas = mas.slice((activePage - 1) * iPPaPC.iPP, activePage * iPPaPC.iPP)
    else {
      mas = mas.slice((activePage - 1) * iPPaPC.iPP, activePage * iPPaPC.iPP)
    }
    setCurMas(mas)
  }, [activePage, iPPaPC, list, from])

  return (
    <>
      <section className="sec1">
        <h3 align="left">{name}<hr align="left"></hr></h3>

        <section className={clname}>
          {curMas?.map(({ id, capt, imgn, info }) => <MyItem key={id} id={id} caption={capt} imgname={imgn} isDef={isDef} info={info} from={from} />)}
        </section>

        <MySelect opt={opt} setIPPaP={setIPPandPC} iPP={iPPaPC.iPP} />
        <div className='pageWrapper'>
          {pagesArray.map(page => <span id={page} key={page} className={page == activePage ? 'page page__current' : 'page'} title={page} onClick={(e) => setActivePage(e.target.title)}>{page}</span>)}
        </div>
      </section>
    </>
  )
}
