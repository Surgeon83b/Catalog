import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MyItem from '../Components/MyItem';
import SingleComment from '../Components/SingleComment';
import LeftPanel from '../Components/LeftPanel';
import MyNavPanel from '../Components/MyNavPanel';
import ListofComments from '../Components/ListofComments';

import '../styles/Home.css';
import '../styles/MySection.css';
import { MyContext } from '../context/MyContext';

export default function AboutItem() {
  const params = useParams();
  const itID = params.id;
  let tlist = [];
  if (localStorage.getItem(itID) !== null) {
    tlist = JSON.parse(localStorage.getItem(itID));
  }

  //const [list, setList] = useState(JSON.parse(localStorage.getItem(itID)));
  const [list, setList] = useState(tlist);
  const [list1, setList1] = useContext(MyContext);
  const [curObj, setCurObj] = useState({});
  const [newRate, setNewRate] = useState(false);

  const nRate = (id) => {
    setNewRate(id)
  }

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem(itID)))
  }, [localStorage.getItem(itID)])

  useEffect(() => {
    setCurObj(list1.find((elem) => elem.id == itID))
  }, [list1, itID]);

  console.log('listFromAbout', list)

  return (
    <>
      <MyNavPanel visible={false} />
      <section className="secondflex">
        <LeftPanel list={list1} />
        <section className="mainsec">
          {curObj && <MyItem caption={curObj.capt} imgname={curObj.imgn} isDef info={curObj.info} id={itID} nRate={nRate} />}
          <p><b>{"Оставьте ваше мнение относительно этого продукта"}</b></p>
          <SingleComment id={itID} name="" text="" isShowedButton={true} set={setList} />

          <p>{"Список комментариев"}</p>
          <ListofComments list={list} isShowedButton={false} id={itID} />
        </section>
      </section>
    </>
  )
}
