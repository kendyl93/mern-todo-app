import React from 'react';
import { Route } from 'react-router-dom';

import Todos from './todos/Todos';
import Create from './todos/Create';
import Edit from './todos/Edit';

const Routes = () => (
  <div>
    <Route component={Todos} exact path="/" />
    <Route component={Edit} path="/edit/:id" />
    <Route component={Create} path="/create" />
  </div>
);

export default Routes;
