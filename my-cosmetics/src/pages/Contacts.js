import React, { useState } from 'react';
import '../styles/MySection.css';
import '../styles/MainSec.css';
import MyNavPanel from '../Components/MyNavPanel';
import ListofComments from '../Components/ListofComments';
import { NewComment } from '../Components/NewComment';

export default function Contacts() {
  const [list, setList] = useState([]);

  const getList = (curList) => {
    setList(curList);
  }

  console.log('Contacts-list', list)
  return (
    <>
      <MyNavPanel visible={false} />
      <section className='contacts'>
        <p className="cont" >Контакты<hr align="left"></hr></p>
        <h4 align="left" style={{ fontSize: "18px" }}>Оставьте ваш отзыв о нашем портале</h4>
        <NewComment getList={getList} />

        <p className="cont">Отзывы</p>
        <ListofComments list={list} isShowedButton={false} />
      </section>
    </>
  )
}
