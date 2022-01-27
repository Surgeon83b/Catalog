import React from 'react';
import '../styles/MyTextarea.css';

export default function MyTextarea({ type, isFor, name, placeholder, cols, rows, valu, get }) {
  const taType = type + isFor;
  return (
    <>
      <textarea readOnly={!(type == 'ADD')} className={taType} onChange={(e) => get(e.target.value)} name={name} cols={cols} rows={rows} placeholder={placeholder} defaultValue={valu}></textarea><br></br>
    </>
  )
}
