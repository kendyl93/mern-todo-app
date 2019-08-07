import React from 'react';
import { Route } from 'react-router-dom';

import Todos from './todos/Todos';
import Create from './todos/Create';
import Edit from './todos/Edit';

const Routes = () => (
  <div>
    <Route path="/" exact component={Todos} />
    <Route path="/edit/:id" component={Edit} />
    <Route path="/create" component={Create} />
  </div>
);

export default Routes;
