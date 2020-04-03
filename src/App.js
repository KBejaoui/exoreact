import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';

import Navigation from './components/Navigation';
import Home          from './pages/Home';
import CreateComments from './pages/CreateComments';
import DeleteComments from './pages/DeleteComments';
import NotFound      from './pages/NotFound';

const App = () => {
  return (
    <Router>
<Navigation/>
      <Switch>
        <Route exact path="/"          component={Home}          />
        <Route path="/comments/create" component={CreateComments} />
        <Route path="/comments/delete" component={DeleteComments} />
        <Route path="*"                component={NotFound}      />
      </Switch>
    </Router>
  );
}



export default App;
