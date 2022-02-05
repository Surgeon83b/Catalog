import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyItem from '../Components/MyItem';
import SingleComment from '../Components/SingleComment';
import { getData } from '../utils/pages';
import Timer from '../Components/Timer';
import LeftPanel from '../Components/LeftPanel';
import MyNavPanel from '../Components/MyNavPanel';

import '../styles/Home.css';
import '../styles/MySection.css';

export default function AboutItem() {
  const params = useParams();
  const itID = params.id;
  let tlist = [];
  if (localStorage.getItem(itID) !== null) {
    tlist = JSON.parse(localStorage.getItem(itID));
  }

  //const [list, setList] = useState(JSON.parse(localStorage.getItem(itID)));
  const [list, setList] = useState(tlist);
  const [list1, setList1] = useState([]);
  const [curObj, setCurObj] = useState({});
  const [newRate, setNewRate] = useState(false);


  const nRate = (id) => {
    setNewRate(id)
  }

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem(itID)))
  }, [localStorage.getItem(itID)])

  useEffect(() => {
    console.log("inuseEffect");
    getData('/Data.json', setList1)
  }, []);

  useEffect(() => {
    setCurObj(list1.find((elem) => elem.id == itID))
  }, [list1, itID]);


  return (
    <>
      <MyNavPanel visible={false} />
      <Timer />
      <section className="secondflex">
        <LeftPanel list={list1} dataUrl={'/Data.json'} />
        <section className="mainsec">
          {curObj && <MyItem caption={curObj.capt} imgname={curObj.imgn} isDef info={curObj.info} id={itID} nRate={nRate} />}

          <SingleComment id={itID} name="" text="" isShowedButton={true} set={setList} />
          {"Список комментариев"}
          {list?.map((item) => <SingleComment key={item.name} name={item.name} text={item.text} isShowedButton={false} id={itID} />)}
        </section>
      </section>
    </>
  )
}
