// Import necessary modules and styles
import React, { useState, useEffect } from 'react'; // Importing required React hooks for functional components
import axios from 'axios'; // Importing axios for making HTTP requests
import './TransactionList.css'; // Importing the CSS file for styling the TransactionList component

// Define the TransactionList component
const TransactionList = () => {
// State variables to manage transactions and form inputs
const [transactions, setTransactions] = useState([]); // State for storing transaction data

