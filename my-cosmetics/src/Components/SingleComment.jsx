import React, { useState } from 'react';
import MyTextarea from './MyTextarea';

export default function SingleComment({ id, name, text, isShowedButton, set }) {
  const [_name, set_Name] = useState('');
  const [_text, set_Text] = useState('');
  const [_id, set_Id] = useState(id);
  let typeOf = isShowedButton ? 'ADD' : 'SHOW';

  const getName = (nam) => {
    set_Name(nam);
  }
  const getText = (tex) => {
    set_Text(tex);
  }

  const addToLocalStorage = (e) => {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem(_id)) === null) {
      let list = [{ name: '⛹ ' + _name, text: _text }];
      localStorage.setItem(_id, JSON.stringify(list));
    } else {
      let list = JSON.parse(localStorage.getItem(_id));
      const newComm = { name: '⛹ ' + _name, text: _text };
      list.push(newComm);
      localStorage.setItem(_id, JSON.stringify(list));

      set(JSON.parse(localStorage.getItem(_id)));
    }
  }

  return (
    <form onSubmit={(e) => addToLocalStorage(e)}>
      <MyTextarea isFor='name' type={typeOf} name={name} cols='60' rows='1' valu={name} placeholder='⛹ Ваше имя' get={getName} />
      <MyTextarea isFor='text' type={typeOf} name={text} cols='60' rows='2' valu={text} placeholder='Оставьте ваш отзыв' get={getText} />
      {isShowedButton && <input type="submit" align="right" value="Отправить" />}
    </form>
  )
}
