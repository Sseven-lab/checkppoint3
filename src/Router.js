import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './components/myProjects/Projects';
import ManageProject from './components/mngmt/ManageProject';

const MyRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/projects" component={Projects} />
        <Route path="/admin/manage" component={ManageProject} />
      </Switch>
    </Router>
  );
};

export default MyRouter;