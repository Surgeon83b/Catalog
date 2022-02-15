import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MyItem from '../Components/MyItem';
import SingleComment from '../Components/SingleComment';
import LeftPanel from '../Components/LeftPanel';
import MyNavPanel from '../Components/MyNavPanel';
import ListofComments from '../Components/ListofComments';
import { getSortedList, getSortedArr } from '../utils/common';

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
  const [listOfComm, setListOfComm] = useState(tlist);
  const list1 = useContext(MyContext);
  const [curObj, setCurObj] = useState({});
  const [newRate, setNewRate] = useState(false);
  const [sortedArr, setSortedArr] = useState([]);
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
    setSortedArr(getSortedArr(list1));
  }, [list1, newRate])

  useEffect(() => {
    setSortedList(getSortedList(list1, sortedArr));
  }, [sortedArr, list1, newRate])

  const nRate = (id) => {
    setNewRate(id)
  }

  console.log('newRateinAbout', newRate)
  useEffect(() => {
    setListOfComm(JSON.parse(localStorage.getItem(itID)))
  }, [itID])

  useEffect(() => {
    setCurObj(list1?.find((elem) => elem.id == itID))
  }, [list1, itID]);

  console.log('listFromAbout', listOfComm)

  return (
    <>
      <MyNavPanel visible={false} />
      <section className="secondflex">
        <LeftPanel sortedList={sortedList} sortedArr={sortedArr}/>
        <section className="mainsec">
          {curObj && <MyItem caption={curObj.capt} imgname={curObj.imgn} isDef info={curObj.info} id={itID} nRate={nRate} />}
          <p><b>{"Оставьте ваше мнение относительно этого продукта"}</b></p>
          <SingleComment id={itID} name="" text="" isShowedButton={true} set={setListOfComm} />

          <p>{"Список комментариев"}</p>
          <ListofComments list={listOfComm} isShowedButton={false} id={itID} />
        </section>
      </section>
    </>
  )
}
