# Enhanced Examination Management System

A full-stack web application developed as a B.Tech DBMS project for managing student examination records, subjects, internal marks, and examination results.

## 📌 Overview

The **Enhanced Examination Management System** is a web-based application designed to simplify the management of student examination information.

The system provides functionality for managing students, subjects, internal marks, and examination results through a simple web interface.

## ✨ Features

- Add student details
- View student records
- Add internal examination marks
- View examination results
- Manage subjects
- Store examination data using MySQL
- REST API backend using Node.js and Express.js
- Simple and responsive web interface

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

## 📂 Project Structure

```text
ENHANCED-EXAMINATION-MANAGEMENT-SYSTEM/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── frontend/
│   ├── index.html
│   ├── add_student.html
│   ├── add_marks.html
│   ├── view_students.html
│   ├── view_results.html
│   └── style.css
│
├── database.sql
└── README.md
```

## ⚙️ Prerequisites

Before running the project, make sure the following are installed:

- [Node.js](https://nodejs.org/)
- MySQL Server

You can also use MySQL Workbench, XAMPP, WAMP, or another MySQL client.

## 🗄️ Database Setup

1. Open MySQL Workbench or another MySQL client.
2. Open the `database.sql` file included in this repository.
3. Execute the SQL script.
4. The script creates the required database and tables.

The application uses the following database:

```text
examination_management
```

### Database Tables

The database contains tables for managing information such as:

- Students
- Subjects
- Examinations
- Internal Marks
- Results

## 🚀 Backend Setup

### 1. Open the project

Open Command Prompt or PowerShell and navigate to the backend folder:

```bash
cd path/to/ENHANCED-EXAMINATION-MANAGEMENT-SYSTEM/backend
```

### 2. Install dependencies

Run:

```bash
npm install
```

### 3. Configure environment variables

For security, database credentials are stored using environment variables instead of being hardcoded in the source code.

Create a file named:

```text
.env
```

inside the `backend` folder.

Add:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=examination_management
```

Replace `your_mysql_password` with your local MySQL password.

> **Important:** Never upload your actual `.env` file or database password to GitHub.

### 4. Start the backend server

Inside the `backend` folder, run:

```bash
node server.js
```

If everything is configured correctly, you should see:

```text
Server running on port 3000
Connected to MySQL database!
```

The backend will be available at:

```text
http://localhost:3000
```

## 🌐 Running the Frontend

After starting the backend server, open the frontend application using a web browser.

The frontend pages include:

- `index.html` — Main page
- `add_student.html` — Add student information
- `view_students.html` — View student records
- `add_marks.html` — Add examination marks
- `view_results.html` — View examination results

## 🔐 Security

Sensitive database credentials are not stored directly in the source code.

Environment variables are used to store local database configuration.

The following files and folders are excluded from Git:

```text
.env
node_modules/
```

This prevents sensitive credentials and installed dependencies from being uploaded to the public repository.

## 🎓 Academic Project

This project was developed as a **B.Tech Database Management Systems (DBMS) project**.

It demonstrates the integration of:

- Database design
- MySQL
- SQL queries
- Node.js
- Express.js
- REST APIs
- HTML
- CSS
- JavaScript

## 👨‍💻 Author

**SREEDHAR VIJAY**

B.Tech Artificial Intelligence and Data Science

## 📄 License

This project is intended primarily for academic and educational purposes.
