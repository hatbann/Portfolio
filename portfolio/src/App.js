import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './routes/Home';
import Header from './components/Header';
import styles from './App.css';

function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Switch>
          <Route path={'/'}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
