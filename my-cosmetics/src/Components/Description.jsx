import React from 'react';
import '../styles/Description.css';

export default function Description({text}) {
  return (
    <div className='descr'>
      <p>
        {text}
      </p>
    </div>
  )
}
