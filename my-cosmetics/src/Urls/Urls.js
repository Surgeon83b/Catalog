import React from 'react';
import { Route } from "react-router-dom";
import Page3 from '../pages/Page3';

export default function Urls() {
  return (
    <Route exact path="/" component={Page3} />  
  )
}
