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
    setDescription(''); // Resetting the description input value after submission
    setAmount(''); // Resetting the amount input value after submission
    setCategory(''); // Resetting the category input value after submission
};

// Handle deletion of a transaction
const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions); // Updating the state by removing the transaction with the specified id
  };


  // Sort transactions by category
const handleSortByCategory = () => {
    setTransactions([...transactions.sort((a, b) => a.category.localeCompare(b.category))]);
    // Sorting the transactions array in place based on the category using localeCompare for string comparison
  };

  // Sort transactions by description
const handleSortByDescription = () => {
    setTransactions([...transactions.sort((a, b) => a.description.localeCompare(b.description))]);
    // Sorting the transactions array in place based on the description using localeCompare for string comparison
  };

    // Handle search input change
const handleSearch = (event) => {
        setSearchTerm(event.target.value); // Updating the state with the search input value
      };
// Filter transactions based on the search term
const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    // Filtering the transactions array based on whether the description contains the search term (case-insensitive)
  );      











