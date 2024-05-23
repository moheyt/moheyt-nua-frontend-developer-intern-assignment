<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Dashboard Assignment - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f4f4f4;
        }
        h1, h2, h3, h4, h5, h6 {
            color: #333;
        }
        code {
            background-color: #eaeaea;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eaeaea;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
        .badge {
            display: inline-block;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>Book Dashboard Assignment for Frontend Development Internship at NUA</h1>
    <p>Welcome to the Book Dashboard project! This project is designed to give you hands-on experience with React-based development, focusing on creating an admin dashboard that displays book records. The records will be fetched from the Open Library API and presented in a tabular format. The dashboard will include essential features such as pagination, sorting, and search functionality.</p>
    
    <h2>Features</h2>
    
    <h3>Data Fetching</h3>
    <ul>
        <li>Fetch book records using the Open Library API.</li>
        <li>API documentation: <a href="https://openlibrary.org/developers/api" target="_blank">Open Library API</a>.</li>
    </ul>
    
    <h3>Columns</h3>
    <ul>
        <li>ratings_average</li>
        <li>author_name</li>
        <li>title</li>
        <li>first_publish_year</li>
        <li>subject</li>
        <li>author_birth_date</li>
        <li>author_top_work</li>
    </ul>
    
    <h3>Pagination</h3>
    <ul>
        <li>Default view shows 10 books per page.</li>
        <li>Option to change the number of records per page to 10, 50, or 100.</li>
    </ul>
    
    <h3>Sorting</h3>
    <ul>
        <li>Support for ascending and descending sort on all columns.</li>
    </ul>
    
    <h3>Search</h3>
    <ul>
        <li>Search books by author name.</li>
    </ul>
    
    <h2>Installation</h2>
    <p>To get started with the project, follow these steps:</p>
    
    <h3>Clone the repository:</h3>
    <pre><code>git clone https://github.com/yourusername/book-dashboard.git
cd book-dashboard</code></pre>
    
    <h3>Install dependencies:</h3>
    <pre><code>npm install</code></pre>
    
    <h3>Start the development server:</h3>
    <pre><code>npm run dev</code></pre>
    
    <h3>Build for production:</h3>
    <pre><code>npm run build</code></pre>
    
    <h2>Project Structure</h2>
    <pre><code>book-dashboard/
├── public/
├── src/
│   ├── components/
│   │   └── AdminDashboard.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── package.json
├── README.md
├── vite.config.js</code></pre>
    
    <h2>How to Use the Dashboard</h2>
    <ol>
        <li><strong>Data Fetching:</strong> The dashboard fetches book records from the Open Library API and displays them in a table format.</li>
        <li><strong>Pagination:</strong> Navigate through the book records using pagination controls. You can set the number of records displayed per page to 10, 50, or 100.</li>
        <li><strong>Sorting:</strong> Click on the column headers to sort the book records in ascending or descending order.</li>
        <li><strong>Search:</strong> Use the search bar to find books by author name.</li>
    </ol>
    
    <h2>Contributing</h2>
    <p>If you wish to contribute to this project, please fork the repository and create a new branch for your changes. Submit a pull request with a description of your changes and why they should be merged.</p>
    
    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the LICENSE file for more information.</p>
    
    <div class="badge">
        <a href="https://forthebadge.com" target="_blank"><img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built with Love"></a>
    </div>
    <div class="badge">
        <a href="https://forthebadge.com" target="_blank"><img src="https://forthebadge.com/images/badges/made-with-javascript.svg" alt="Made with JavaScript"></a>
    </div>
</body>
</html>
