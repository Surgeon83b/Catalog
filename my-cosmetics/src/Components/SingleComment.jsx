import React, { useState } from 'react';
import MyTextarea from './MyTextarea';
import '../styles/MyTextarea.css';


export default function SingleComment({ id, name, text, isShowedButton, set }) {
  const [_name, set_Name] = useState(name);
  const [_text, set_Text] = useState(text);
  const [clear, setClear] = useState(false);

  let typeOf = isShowedButton ? 'ADD' : 'SHOW';

  const getName = (nam) => {
    set_Name(nam);
    setClear(false)
  }
  const getText = (tex) => {
    set_Text(tex);
    setClear(false)
  }

  const addToLocalStorage = (e) => {
    e.preventDefault();
    console.log('Add', _name)
    let list = [];
    if (JSON.parse(localStorage.getItem(id)) === null) {
      list = [{ name: '⛹ ' + _name, comment: _text }];
    } else {
      list = JSON.parse(localStorage.getItem(id));
      const newComm = { name: '⛹ ' + _name, comment: _text };
      list.push(newComm);
    }
    localStorage.setItem(id, JSON.stringify(list));
    set(JSON.parse(localStorage.getItem(id)));
    console.log('fromSingleComment', localStorage.getItem(id))
    setClear(true);
    set_Name('');
    set_Text('');
  }

  return (
    <form className="newComment" onSubmit={(e) => addToLocalStorage(e)}>
      <MyTextarea isFor='name' type={typeOf} cols='60' rows='1' value={clear ? '' : _name} placeholder='⛹ Ваше имя' get={getName} />
      <MyTextarea isFor='text' type={typeOf} cols='60' rows='2' value={clear ? '' : _text} placeholder='Оставьте ваш отзыв' get={getText} />
      {isShowedButton && _name && _text && <input type="submit" align="right" value="Отправить" />}
    </form>
  )
}
