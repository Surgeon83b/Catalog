import React, { useState } from 'react';

const selChange = (value, selSetter, setForItemsPP) => {
  selSetter(value);
  setForItemsPP(value);
}

export default function MySelect({ opt, set }) {
  const [selectedOption, setSelectedOption] = useState(opt[0].value);
  return (
    <select
      name='itemsPerPage'
      id='ipp'
      value={selectedOption}
      onChange={e => selChange(e.target.value, setSelectedOption, set)} >
      {opt.map((o) => <option key={o.value} value={o.value}>{o.name}</option>)}
    </select>
  )
}
