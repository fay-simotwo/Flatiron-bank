// Import necessary modules and styles
import React, { useState, useEffect } from 'react'; // Importing required React hooks for functional components
import axios from 'axios'; // Importing axios for making HTTP requests
import './TransactionList.css'; // Importing the CSS file for styling the TransactionList component

// Define the TransactionList component
const TransactionList = () => {
// State variables to manage transactions and form inputs
const [transactions, setTransactions] = useState([]); // State for storing transaction data
const [date, setDate] = useState(''); // State for storing the date input value
const [description, setDescription] = useState(''); // State for storing the description input value
const [amount, setAmount] = useState(''); // State for storing the amount input value
const [category, setCategory] = useState(''); // State for storing the category input value




