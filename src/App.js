import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/homePage'
import AboutPage from './components/aboutPage'
import Header from './components/header'
import PageNotFound from './components/pageNotFound'
import ProjectsPage from './components/projects/projectsPage'
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default App;
