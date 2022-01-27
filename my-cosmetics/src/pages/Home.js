import React, { useState, useEffect } from 'react';
import MainSec from '../Components/MainSec.jsx';
import '../styles/Home.css';
import Base from '../Components/Base';

export default function Home() {
  return (
    <Base from='Home' add={<MainSec isDef={false} />} />
  )
}
