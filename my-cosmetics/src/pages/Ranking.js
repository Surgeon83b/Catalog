import React, { useState, useEffect } from 'react';
import '../styles/Ranking.css'
import MySection from '../Components/MySection';
import Base from '../Components/Base';

export default function Ranking() {

  const getData = (url) => {
    fetch(url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setList1(myJson)
      })
  }
  const [list1, setList1] = useState([]);
  useEffect(() => {
    getData('../Data.json')
  }, []);

  return (

    <Base from='Ranking' add={
      <section className="mainsec">
        <MySection name="Рейтинг средств" list={list1} pagesArray={[1, 2]} clname="sec12" isDef="true" />
      </section>
    } />
  )
}
