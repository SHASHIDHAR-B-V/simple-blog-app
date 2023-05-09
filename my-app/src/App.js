import React from 'react';
import './App.css';
import Posts from './componens/posts/Posts';

const App = () => {
  return (
    <div className='main-container'>
      <h1 className='main-heading'>BlogApp</h1>
      <Posts />
    </div>
  );
};
export default App;
