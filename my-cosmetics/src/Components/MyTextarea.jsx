import React from 'react';
import '../styles/MyTextarea.css';

export default function MyTextarea({ type = 'ADD', isFor, placeholder, cols, rows, value, get }) {
  const taType = type + isFor;

  const setNew = (e) => {
    get(e.target.value)
  }

  return (
    <>
      <textarea disabled={!(type === 'ADD')} className={taType} onChange={(e) => setNew(e)} cols={cols} rows={rows} placeholder={placeholder} value={value} defaultValue=''></textarea><br></br>
    </>
  )
}
