import React from 'react';
import TransactionList from './components/TransactionList';
import { Helmet } from 'react-helmet-async';


const App = () => {
  return (
    <div className="App">
      <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" />
      </Helmet>
      <TransactionList />

    </div>
  );
};

export default App;
