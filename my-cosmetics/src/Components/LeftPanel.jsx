import React, { useState, useEffect } from 'react';
import '../styles/LeftPanel.css';
import MyList from './MyList';

const news = ["Мобильное приложение Mirror Me"];

export default function LeftPanel({ dataUrl }) {

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
        setList1(myJson)
      })
  }
  const [list1, setList1] = useState([]);
  useEffect(() => {
    getData(dataUrl)
  }, []);

  return (
    <section className="leftcol">
      {list1 && <MyList name="Рейтинг средств" type="ol" list={list1}></MyList>}
      <MyList name="Новости" type="ul" list={news}></MyList>
    </section>
  )
}
