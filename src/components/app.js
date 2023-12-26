// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={() => <ItemListContainer greeting="¡Bienvenido a la tienda!" />} />
          <Route path="/category/:id" component={ItemListContainer} />
          {/* Agrega más rutas según tus necesidades */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
