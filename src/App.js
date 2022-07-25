import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <React.Fragment>
      <div className="header">Pro-Nutritions</div>
      <FoodBox />
    </React.Fragment>
  );
}

export default App;