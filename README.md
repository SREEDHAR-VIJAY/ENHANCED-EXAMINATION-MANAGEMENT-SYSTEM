# Enhanced Examination Management System

This is a complete Full Stack Web Application for a B.Tech S4 DBMS project. It uses HTML, CSS, JavaScript for the frontend, Node.js with Express for the backend APIs, and MySQL for the database.

## Project Structure

\`\`\`
/examination-system
  /frontend
    index.html
    add_student.html
    view_students.html
    add_marks.html
    view_results.html
    style.css
  /backend
    server.js
    package.json
  database.sql
  README.md
\`\`\`

---

## Step-by-Step Run Instructions

### 1. Prerequisites
- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
- **MySQL Server**: Download and install MySQL (or use XAMPP / WAMP / MySQL Workbench).

### 2. Setup the Database (MySQL)
1. Open your MySQL client (e.g., MySQL Workbench, phpMyAdmin, or terminal).
2. Copy the contents of the `database.sql` file provided in this project.
3. Execute the SQL script. This will create a database named `examination_management` and all the required tables (students, subjects, exams, internal_marks, results, etc.).
4. **Important:** Add some subjects manually so you can add marks later. Run this in MySQL:
   \`\`\`sql
   USE examination_management;
   INSERT INTO subjects (subject_name, credits) VALUES ('Database Management Systems', 4);
   INSERT INTO subjects (subject_name, credits) VALUES ('Operating Systems', 3);
   \`\`\`
   *(Subject IDs will be 1 and 2 respectively).*

### 3. Setup the Backend (Node.js)
1. Open your terminal or command prompt.
2. Navigate to the `backend` folder:
   \`\`\`cmd
   cd path/to/examination-system/backend
   \`\`\`
3. Install the required dependencies:
   \`\`\`cmd
   npm install
   \`\`\`
4. Check database credentials in `server.js` (Line 11):
   \`\`\`javascript
   const db = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: '', // Enter your MySQL root password here if you have one
       database: 'examination_management'
   });
   \`\`\`
5. Start the backend server:
   \`\`\`cmd
   node server.js
   \`\`\`
   You should see:
   > Server running on port 3000
   > Connected to MySQL database!

### 4. Run the Frontend
1. The frontend uses plain HTML, CSS, and JS. You **do not** need a web server to view the basic UI, but it's recommended to serve the `frontend` folder using an extension like **Live Server** in VS Code to prevent any CORS issues, OR simply double-click the `index.html` file to open it in your browser.
2. Navigate the system:
   - Go to **Add Student** and add a student.
   - Go to **View Students** to verify they've been added.
   - Go to **Add Marks**, type the Student ID (e.g., 1) and Subject ID (e.g., 1), and submit marks.
   - On the same page, under "Calculate Final Result", enter the Student ID and Subject ID again to generate the grade.
   - Go to **View Results** to see the final outputs.

---

### Features Implemented
- **Student Management:** Frontend UI to add and list students, mapped directly to MySQL.
- **Internal Assessment Management:** Frontend UI to enter marks for any subject a student took.
- **Result Management:** Calculates total marks, assigns a standard grade (S, A, B, C, D, E, F), and permanently stores it.
- **RESTful APIs:** Clean JSON communication between client and Node.js.
