import React, { useEffect, useState } from 'react';

export default function MySelect({ opt, setIPPaP, iPP }) {
  const [selectedOption, setSelectedOption] = useState(iPP);

  useEffect(() => {
    setSelectedOption(iPP)
  }, [iPP])

  const selChange = (value) => {
    setSelectedOption(value);
    setIPPaP(value);
  }

  return (
    <div style={{display:'flex', flexDirection: 'row', verticalAlign:'top'}}>
      <select
        name='itemsPerPage'
        id='ipp'
        
        value={selectedOption}
        onChange={e => selChange(e.target.value)} >
        {opt.map((o) => <option key={o.value} value={o.value} >{o.name}</option>)}
      </select>
      <p style={{margin:'0 0 0 6px'}}> на странице</p>
    </div>
  )
}

// value={selectedOption}
//defaultValue={opt[opt.length - 1]?.value}
//selected={o.value === opt.length ? "selected" : null}
