import React from 'react';
import '../styles/MyTextarea.css';

export default function MyTextarea({ type = 'ADD', isFor, name, placeholder, cols, rows, valu, clear, get }) {
  const taType = type + isFor;
  return (
    <>
      <textarea readOnly={!(type === 'ADD')} className={taType} onChange={(e) => get(e.target.value)} name={name} cols={cols} rows={rows} placeholder={placeholder} value={valu} defaultValue={clear ? '' : valu}></textarea><br></br>
    </>
  )
}
