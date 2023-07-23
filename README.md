# Flatiron Bank
This project is a web application built using React.js to manage bank transactions. It allows users to add, delete, search, and sort transactions with a user-friendly interface. The application presents a list of transactions, each with a date, description, category, and amount. Users can add new transactions through a form, and the transactions are displayed in a visually appealing manner.

## Key Features:
- Transaction Management: Users can add new transactions by entering the date, description, amount, and category. They can also delete transactions they no longer need.

- Search Functionality: The application provides a search bar where users can enter a search term, and the list of transactions will be filtered to show only those that match the description containing the search term.

- Sorting Transactions: Users can sort the list of transactions by category or description, helping them quickly organize and find specific transactions.

- Responsive Design: The application is designed with responsive CSS styles, ensuring it works well and maintains its usability on different screen sizes, including mobile devices.

- Styling and User Experience: The project includes well-designed styles, including color schemes, hover effects, and visual feedback, to enhance the overall user experience.

Overall, this project demonstrates the implementation of a simple but functional transaction management system using React.js and demonstrates how to interact with a server to fetch and update transaction data. It could be used as a starting point for more complex financial management applications or adapted for various other data management purposes.
## Author
CHEPKOECH FAITH

## Technologies Used
- React.js: The core technology used for building the user interface. React is a popular JavaScript library for creating reusable UI components and managing the application's state efficiently.

- JavaScript (ES6+): The primary programming language used in the project. ECMAScript 6 (ES6) and later versions of JavaScript provide modern syntax and features that enhance code readability and maintainability.

- Axios: A JavaScript library used to make HTTP requests from the client-side. In this project, Axios is used to fetch transaction data from the server and send new transaction data to the server.

- HTML: The standard markup language used to structure the web pages.

- CSS: The Cascading Style Sheets language used to apply styles and layout to the HTML elements, ensuring the application has a visually appealing and user-friendly interface.

- CSS Flexbox: Flexbox is a CSS layout module that provides a flexible way to arrange and align items within a container. It is used in the project to create a responsive and well-organized layout for the form and list of transactions.

- Media Queries: CSS media queries are used to implement responsive design. They allow the application to adapt its layout and styles based on the user's device screen size, ensuring a better user experience on various devices.

- API: The project likely communicates with a server using a RESTful API to fetch and send transaction data. REST (Representational State Transfer) is an architectural style used for designing networked applications.

Overall, the combination of React.js, Axios, JavaScript, HTML, and CSS allows the project to create a dynamic and interactive web application for managing bank transactions. The project's use of modern technologies and responsive design ensures that users can easily interact with the application on different devices and screen sizes. Additionally, the utilization of RESTful API principles enables smooth communication between the client-side application and the server-side, facilitating data retrieval and updates.
## Installation
```
1. Clone the repository:

   git clone git@github.com:fay-simotwo/Flatiron-bank.git

2. Navigate to the project directory:
   cd flatiron-bank

3. Install dependancies:
   npm install

4. Start the Development server:
   npm start

5. Build the production version:
   npm run build 

```

## Usage

- Adding Transactions

Open the application in your web browser by navigating to http://localhost:3000.
Click on the "Add Transaction" button at the top of the page to open the form.
Enter the date, description, amount, and category for the new transaction in the respective input fields.
Click the "Add Transaction" button to save the new transaction.
- Deleting Transactions

To delete a transaction, find the transaction you want to delete in the list.
Click the "Delete" button next to the transaction you wish to remove.
Confirm the deletion in the prompt that appears.
- Sorting Transactions

To sort the list of transactions by category, click the "Sort by Category" button.
To sort the list of transactions by description, click the "Sort by Description" button.
- Searching Transactions

Use the search bar at the top of the page to search for transactions by description.
As you type, the list of transactions will be filtered to show only those whose description matches the search term.
- Viewing Transaction Details

Each transaction is displayed as a list item with its date, description, category, and amount.
The transaction amount is displayed in USD format with two decimal places.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

#### You can reach me on :
- Email: chepfaith18@gmail.com
- Mattermost: @chepkoech.faith
- Linkedin: @faith-chepkoech

## License

This project is licensed under the [MIT License](LICENSE).

