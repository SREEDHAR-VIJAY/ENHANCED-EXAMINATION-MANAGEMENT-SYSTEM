# Enhanced Examination Management System

A full-stack web application developed as a B.Tech DBMS project for managing student information, subjects, internal examination marks, and examination results.

---

## 📌 Overview

The **Enhanced Examination Management System** is a database-driven web application designed to simplify the management of student examination records.

The system provides a web interface for adding and viewing student details, entering internal examination marks, and displaying examination results. The backend is built using Node.js and Express.js, while MySQL is used to store and manage the application data.

The project demonstrates the practical implementation of **Database Management System concepts** together with full-stack web development.

---

## ✨ Features

- 👨‍🎓 Add student details
- 📋 View student records
- 📚 Manage subject information
- 📝 Add internal examination marks
- 📊 View examination results
- 🗄️ Store data using MySQL
- 🔗 Backend REST APIs using Node.js and Express.js
- 🌐 Web-based frontend using HTML, CSS, and JavaScript
- 🔐 Database credentials managed using environment variables

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js
- REST APIs

### Database

- MySQL
- SQL

### Development Tools

- Visual Studio Code
- MySQL Workbench
- Git
- GitHub

---

## 📂 Project Structure

```text
ENHANCED-EXAMINATION-MANAGEMENT-SYSTEM/
│
├── backend/
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── add_student.html
│   ├── view_students.html
│   ├── add_marks.html
│   ├── view_results.html
│   └── style.css
│
├── database.sql
└── README.md
```

> The `.env` file and `node_modules` directory are intentionally excluded from the repository for security and size reasons.

---

## 🗃️ Database

The application uses **MySQL** as its relational database.

The database used by the application is:

```text
examination_management
```

The database is designed to store information related to:

- Students
- Subjects
- Examinations
- Internal Marks
- Results

The SQL database structure is provided in:

```text
database.sql
```

---

## 🔄 Project Workflow

```text
Student Details
       ↓
Student Registration
       ↓
Subject Information
       ↓
Internal Marks Entry
       ↓
Marks Stored in MySQL
       ↓
Result Processing
       ↓
Examination Result Display
```

---

## 🧩 Application Modules

### 1. Student Management

The student management module allows student information to be added and viewed through the web interface.

### 2. Subject Management

Subject information is maintained in the MySQL database and is used while managing examination marks.

### 3. Internal Marks Management

Internal examination marks can be entered for students and stored in the database.

### 4. Result Management

The result module retrieves the required information from the database and displays examination results through the web interface.

---

# 🚀 How to Run the Project

## 1. Prerequisites

Install the following software before running the project:

- Node.js
- MySQL Server
- MySQL Workbench or another MySQL client
- A modern web browser

---

## 2. Clone the Repository

Clone this repository using:

```bash
git clone https://github.com/SREEDHAR-VIJAY/ENHANCED-EXAMINATION-MANAGEMENT-SYSTEM.git
```

Move into the project directory:

```bash
cd ENHANCED-EXAMINATION-MANAGEMENT-SYSTEM
```

---

## 3. Setup the Database

Open **MySQL Workbench** or another MySQL client.

Open the following file from the project:

```text
database.sql
```

Execute the SQL script.

This will create the required database and tables.

The application uses:

```text
Database Name: examination_management
```

---

## 4. Setup the Backend

Open a terminal and navigate to the backend directory:

```bash
cd backend
```

Install the required Node.js dependencies:

```bash
npm install
```

---

## 5. Configure Environment Variables

The application uses environment variables to keep database credentials out of the source code.

Inside the `backend` folder, create a file named:

```text
.env
```

Add the following:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=examination_management
```

Replace:

```text
your_mysql_password
```

with the password of your local MySQL account.

### ⚠️ Important

Do **not** upload the `.env` file to GitHub.

The `.gitignore` file already excludes it from Git tracking.

---

## 6. Start the Backend Server

From the `backend` directory, run:

```bash
node server.js
```

If the configuration is correct, the terminal should display:

```text
Server running on port 3000
Connected to MySQL database!
```

The backend server runs on:

```text
http://localhost:3000
```

---

## 7. Open the Frontend

Open the frontend files from the `frontend` folder in a web browser.

The main page is:

```text
frontend/index.html
```

Make sure the backend server is running while using features that communicate with the database.

---

# 🔐 Security

Database credentials are stored using environment variables instead of being hardcoded in the source code.

The following are excluded from the Git repository:

```text
.env
node_modules/
```

This helps prevent sensitive credentials and unnecessary dependency files from being published publicly.

---

# 📋 GitHub Repository Structure

The public repository contains the source code and database script required to understand and run the project.

Sensitive local configuration files are intentionally not included.

```text
Source Code
     ↓
Git Repository
     ↓
GitHub
     ↓
Clone Repository
     ↓
Configure .env
     ↓
Setup MySQL
     ↓
Run Backend
     ↓
Use Application
```

---

# 🎯 Project Objectives

The main objectives of this project are:

- To design a relational database for examination management.
- To apply DBMS concepts in a practical application.
- To manage student and examination records efficiently.
- To connect a web application with a MySQL database.
- To implement backend APIs using Node.js and Express.js.
- To provide a simple interface for managing examination-related information.

---

# 📚 DBMS Concepts Demonstrated

This project provides practical exposure to concepts such as:

- Relational databases
- Tables and relationships
- Primary keys
- Foreign keys
- SQL queries
- Data insertion and retrieval
- Database connectivity
- CRUD operations
- Relational data management

---

# 🔮 Future Improvements

Possible future improvements include:

- 🔑 User authentication and login
- 👨‍🏫 Separate teacher/admin access
- 📊 Improved result analytics
- 📈 Graphical performance reports
- 🧾 Automatic result generation
- 📱 Improved mobile responsiveness
- ☁️ Online deployment
- 🔒 Additional authentication and security features
- 📥 Export examination results as PDF or Excel

---

# 🎓 Academic Project

This project was developed as part of a **B.Tech Database Management Systems (DBMS) project**.

It combines database concepts with web application development to create a practical examination management system.

---

# 👨‍💻 Author

**SREEDHAR VIJAY**

B.Tech Artificial Intelligence and Data Science

---

## 📄 License

This project is intended for academic and educational purposes.
