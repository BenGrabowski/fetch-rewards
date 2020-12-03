import React, { Component } from 'react';
import STORE from './STORE';
import List from './List';

class App extends Component {
  
  state = {
    list1: STORE.filter(item => item.listId === 1 && item.name),
    list2: STORE.filter(item => item.listId === 2 && item.name),
    list3: STORE.filter(item => item.listId === 3 && item.name),
    list4: STORE.filter(item => item.listId === 4 && item.name)
  };
  
  render() {
    const { list1, list2, list3, list4 } = this.state;

    return (
        <main className='App'>
          <List id={1} items={list1} />
          <List id={2} items={list2} />
          <List id={3} items={list3} />
          <List id={4} items={list4} />
        </main>
      );    
  }
}

export default App;