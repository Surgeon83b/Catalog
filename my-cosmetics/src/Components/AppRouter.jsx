import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Ranking from '../pages/Ranking';
import AboutItem from '../pages/AboutItem';
import Contacts from '../pages/Contacts';
import NotFound from '../pages/NotFound';

import { RouterUrl } from '../routes.js';

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path={RouterUrl.Homepage} render={(props) => <Home {...props} />} />
      <Route exact path={RouterUrl.Contacts} render={(props) => <Contacts {...props} />} />
      <Route exact path={RouterUrl.Ranking} render={(props) => <Ranking {...props} />} />
      <Route exact path={RouterUrl.AboutItem} render={(props) => <AboutItem {...props} />} />
      <Route path={RouterUrl.NotFound} render={(props) => <NotFound {...props} />} />
    </Switch>
  )
}
