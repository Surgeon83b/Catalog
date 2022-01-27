import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyItem from '../Components/MyItem';
import SingleComment from '../Components/SingleComment';
import Base from '../Components/Base';

import '../styles/Home.css';
import '../styles/MySection.css';



export default function AboutItem() {
  const params = useParams();
  const itID = params.id;

  const [list, setList] = useState(JSON.parse(localStorage.getItem(itID)));
  const [list1, setList1] = useState([]);
  const [curObj, setCurObj] = useState({});

  const getData = (url) => {
    fetch(url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setList1(myJson);
      })
  }

  const refreshList = (list) => {
    setList(list);
  }

  useEffect(() => {
    console.log("inuseEffect");
    getData('/Data.json')
  }, []);

  useEffect(() => {
    setCurObj(list1.find((elem) => elem.id == itID))
  }, [list1, itID]);


  return (
    <Base from='AboutItem' add={
      <section className="mainsec">
        {curObj && <MyItem caption={curObj.capt} imgname={curObj.imgn} isDef info={curObj.info} id={itID} />}

        <SingleComment id={itID} name="" text="" isShowedButton={true} set={refreshList} />
        {"Список комментариев"}
        {list?.map((item) => <SingleComment key={item.name} name={item.name} text={item.text} isShowedButton={false} id={itID} />)}
      </section>
    } />
  )
}
