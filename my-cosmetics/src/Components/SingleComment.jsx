import React, { useState } from 'react';
import MyTextarea from './MyTextarea';

export default function SingleComment({ id, name, text, isShowedButton, set }) {
  const [_name, set_Name] = useState('');
  const [_text, set_Text] = useState('');
  let typeOf = isShowedButton ? 'ADD' : 'SHOW';

  const getName = (nam) => {
    set_Name(nam);
  }
  const getText = (tex) => {
    set_Text(tex);
  }

  const addToLocalStorage = (e) => {
    e.preventDefault();
    console.log('Add', _name)
    let list = [];
    if (JSON.parse(localStorage.getItem(id)) === null) {
      list = [{ name: '⛹ ' + _name, text: _text }];
    } else {
      list = JSON.parse(localStorage.getItem(id));
      const newComm = { name: '⛹ ' + _name, text: _text };
      list.push(newComm);
    }
    localStorage.setItem(id, JSON.stringify(list));
    set(JSON.parse(localStorage.getItem(id)));
    console.log(localStorage.getItem(id))
  }

  return (
    <form onSubmit={(e) => addToLocalStorage(e)}>
      <MyTextarea isFor='name' type={typeOf} name={name} cols='60' rows='1' valu={name} placeholder='⛹ Ваше имя' get={getName} />
      <MyTextarea isFor='text' type={typeOf} name={text} cols='60' rows='2' valu={text} placeholder='Оставьте ваш отзыв' get={getText} />
      {isShowedButton && <input type="submit" align="right" value="Отправить" />}
    </form>
  )
}
