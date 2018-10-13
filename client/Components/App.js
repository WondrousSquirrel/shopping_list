import React, { Component } from 'react';
import AppNavBar from './AppNavBar';
import ShoppingList from './ShoppingList';
import ItemModal from './ItemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from '../store';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;