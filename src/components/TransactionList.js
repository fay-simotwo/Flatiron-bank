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
const [searchTerm, setSearchTerm] = useState(''); // State for storing the search input value

 // useEffect hook to fetch transactions from the server on component mount
 useEffect(() => {
    axios.get('http://localhost:3000/transactions') // Sending a GET request to fetch transaction data from the server
      .then((response) => {
        setTransactions(response.data); // Updating the state with fetched transaction data
      })
      .catch((error) => {
        console.error('Error fetching data:', error); // Handling errors if the data fetching fails
      });
  }, []);
  // Handle form submission when adding a new transaction
  const handleSubmit = (event) => {
    event.preventDefault(); // Preventing the default form submission behavior
    const newTransaction = {
      id: Math.random(), // Generating a random id for the new transaction (not ideal for production)
      date: date,
      description: description,
      amount: parseFloat(amount), // Parsing the amount input value to a floating-point number
      category: category,
    };
    setTransactions([...transactions, newTransaction]); // Adding the new transaction to the list of transactions
    setDate(''); // Resetting the date input value after submission






