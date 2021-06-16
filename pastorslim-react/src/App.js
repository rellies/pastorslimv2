//React
import React from 'react';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

//CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
