import React, { useEffect, useState } from 'react';

export default function MySelect({ opt, setIPPaP, iPP }) {
  const [selectedOption, setSelectedOption] = useState(iPP);

  useEffect(() => {
    setSelectedOption(iPP)
  }, [])

  const selChange = (value) => {
    setSelectedOption(value);
    setIPPaP(value);
  }

  return (
    <select
      name='itemsPerPage'
      id='ipp'
      value={selectedOption}
      onChange={e => selChange(e.target.value)} >
      {opt.map((o) => <option key={o.value} value={o.value}>{o.name}</option>)}
    </select>
  )
}
