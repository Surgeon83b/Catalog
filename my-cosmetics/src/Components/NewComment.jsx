import React, { useState, useEffect } from "react";
import MyTextarea from "./MyTextarea";
import '../styles/MyTextarea.css';

export const NewComment = ({ getList }) => {
  const [curName, setCurName] = useState('');
  const [curEmail, setCurEmail] = useState('');
  const [curComment, setCurComment] = useState('');

  let tlist = [];
  if (localStorage.getItem("contacts") !== null) {
    tlist = JSON.parse(localStorage.getItem("contacts"));
  }
  const [list, setList] = useState(tlist);

  useEffect(() => {
    setList(list);
    getList(tlist);
  }, [])

  const addContacts = (e) => {
    e.preventDefault();
    const toAdd = {
      name: '⛹ ' + curName,
      email: curEmail,
      comment: curComment
    }
    tlist.push(toAdd);
    localStorage.setItem("contacts", JSON.stringify(tlist));
    getList(tlist);
    setCurName(''); setCurEmail(''); setCurComment('');
  }

  return (
    <form className="newComment" onSubmit={(e) => addContacts(e)}>
      <MyTextarea name="yourname"
        type='ADD'
        isFor='name'
        cols="80"
        rows="1"
        placeholder='⛹ Ваше имя'
        value={curName}
        get={setCurName} />

      <MyTextarea name="email"
        type='ADD'
        isFor='email'
        cols="80"
        rows="1"
        placeholder='✉ Ваш e-mail'
        value={curEmail}
        get={setCurEmail} />

      <MyTextarea name="comment"
        type='ADD'
        isFor='text'
        cols="80"
        rows="3"
        placeholder='Оставьте ваш отзыв'
        value={curComment}
        get={setCurComment} />

      {curName && curEmail && curComment && <input type="submit" value="Отправить" />}
    </form>
  )
}
