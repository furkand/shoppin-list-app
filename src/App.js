import React from 'react';
import './App.css';
import ShoppingList from "./ShoppingList"
import {ItemProvider} from "./context"

function App() {
  return (

    <ItemProvider>
          <ShoppingList/>
    </ItemProvider>

  );
}

export default App;
