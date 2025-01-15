import React, { useState, useEffect } from 'react';
import '../Contents/Contents'
import Contents from '../Contents/Contents'

const Home = () => {
  useEffect(() => {
    document.title = "Home";
}, []);
  
  return (
    <div>
      <Contents />
    </div>
  )
}

export default Home
