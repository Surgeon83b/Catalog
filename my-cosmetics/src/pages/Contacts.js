import React, { useState, useEffect } from 'react';
import '../styles/MySection.css';
import '../styles/MainSec.css';
import MyTextarea from '../Components/MyTextarea';
import SingleComment from '../Components/SingleComment';
import MyNavPanel from '../Components/MyNavPanel';
import Timer from '../Components/Timer';


export default function Contacts() {
  let tlist = [];
  if (localStorage.getItem("contacts") !== null) {
    tlist = JSON.parse(localStorage.getItem("contacts"));
  }
  const [curName, setCurName] = useState('');
  const [curEmail, setCurEmail] = useState('');
  const [curComment, setCurComment] = useState('');
  const [list, setList] = useState(tlist);
  const [clear, setClear] = useState(false)

  const getName = (name) => {
    // console.log("Name ",name);
    setCurName(name);
    setClear(false)
  }
  const getEmail = (email) => {
    // console.log("Email ",email);
    setCurEmail(email);
    setClear(false)
  }
  const getComment = (comment) => {
    // console.log("Comment ",comment);
    setCurComment(comment);
    setClear(false)
  }

  const addContacts = (e) => {
    e.preventDefault();
    const toAdd = {
      name: curName,
      email: curEmail,
      comment: curComment
    }
    tlist.push(toAdd);
    setClear(true)
    localStorage.setItem("contacts", JSON.stringify(tlist));
    setList(tlist);
  }

  useEffect(() => {
    setList(list);
  }, [])

  console.log('clear', clear)
  return (
    <>
      <MyNavPanel visible={false} />
      <Timer />
      <section className='contacts'>
        <h3 align="left">Контакты<hr align="left"></hr></h3>
        <h4 align="left">Оставьте ваш отзыв о нашем портале</h4>
        <form onSubmit={(e) => addContacts(e)}>
          <MyTextarea name="yourname"
            type='ADD'
            isFor='name'
            cols="80"
            rows="1"
            placeholder='⛹ Ваше имя'
            valu={clear ? '' : null}
            get={getName} />

          <MyTextarea name="email"
            type='ADD'
            isFor='email'
            cols="80"
            rows="1"
            placeholder='✉ Ваш e-mail'
            valu={clear ? '' : null}
            get={getEmail} />

          <MyTextarea name="comment"
            type='ADD'
            isFor='text'
            cols="80"
            rows="3"
            placeholder='Оставьте ваш отзыв'
            valu={clear ? '' : null}
            get={getComment} />
          <input type="submit" align="right" value="Отправить" />
        </form>
        <h4>Отзывы</h4>
        {list?.map((item) => <SingleComment key={item.email} name={item.name} text={item.comment} isShowedButton={false} />)}
      </section>
    </>
  )
}
