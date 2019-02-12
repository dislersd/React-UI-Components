import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import FooterContainer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className='App'>
    <HeaderContainer />
    <a href='https://reactjs.org/' target='_blank'><CardContainer /></a>
    <FooterContainer />
    </div>
  );
};

export default App;
