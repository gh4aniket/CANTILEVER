# ✅ Task Management App

A simple and powerful **Task Management System** built with the **MERN stack** (MongoDB, Express.js, React.js with Vite, Node.js). It allows users to register, log in, create, view, update, delete, and track tasks based on their current status.

---

## 🔧 Technologies Used

- **Frontend:** React.js (with **Vite**) + Material UI
- **Backend:** Node.js + Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JSON Web Tokens (JWT)
- **Other Libraries:**
  - `axios` – API communication
  - `react-router-dom` – Client-side routing
  - `bcryptjs` – Password encryption
  - `jsonwebtoken` – Token-based auth
  - `recharts` – For pie charts and data visualization
  - `dayjs` – For clean date formatting
  - `dotenv` – Environment variable management
  - `cors` – Cross-Origin resource handling

---

## 🔐 Login Section

Users can log in or sign up using a username and password.

- After successful signup, the user is shown a **confirmation banner** and automatically redirected to the login page.

<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Task-Management-Webapp/sample-image/Screenshot%202025-07-15%20093350.png?raw=true" alt="Login Page" width="45%" />
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Task-Management-Webapp/sample-image/Screenshot%202025-07-15%20093414.png?raw=true" alt="Signup Page" width="45%" />
</p>

---

## 🏠 Insert Task Section

After login, users land on the **Home Page** with a form to create new tasks. The form includes:

- Title
- Description
- Submit Button
- “My Task” button to view all tasks

<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Task-Management-Webapp/sample-image/Screenshot%202025-07-15%20093930.png?raw=true" alt="Insert Task Section" width="70%" />
</p>
<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Task-Management-Webapp/sample-image/Screenshot%202025-07-15%20093944.png?raw=true" alt="Insert Task Section" width="70%" />
</p>

---

## 📋 Task List Section

Displays the list of tasks created by the user, each with:

- **Title**
- **Description**
- **Created At**
- **Last Updated At**
- **Status** shown with a colored banner (e.g., *Pending*, *Completed*)

### 🧭 Category Filter & Pie Chart

- On the upper half is a **menu to filter tasks by category**:
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Task-Management-Webapp/sample-image/Screenshot%202025-07-15%20093952.png?raw=true" alt="Task Category Menu" width="80%" />

- On the lower left is a **Pie Chart** showing count of tasks by status:
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Task-Management-Webapp/sample-image/Screenshot%202025-07-15%20094000.png?raw=true" alt="Task Pie Chart" width="50%" />

---

## 🛠️ Detail View & Update Task Section

Clicking the **View icon** on a task from the list opens a **detailed view** where the user can:

- See all task details
- Modify the title, description, and status
- Submit updates

<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Task-Management-Webapp/sample-image/Screenshot%202025-07-15%20094609.png?raw=true" alt="Update Task Section" width="70%" />
</p>

---

## ❌ Delete Task Section

Clicking the **Delete icon** on a task:

- Deletes the task
- Shows a success banner saying: “Task deleted successfully”
- **Pie chart auto-updates** to reflect changes

<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Task-Management-Webapp/sample-image/Screenshot%202025-07-15%20094131.png?raw=true" alt="Delete Task Section" width="70%" />
</p>

---

## 🙋 About Section

Brief introduction about me and purpose of the project.

<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Task-Management-Webapp/sample-image/Screenshot%202025-07-15%20094147.png?raw=true" alt="About Me" width="60%" />
</p>

---

## 📬 Contact Section

Ways for users to connect with me (GitHub, LinkedIn, Email, etc.)

<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Task-Management-Webapp/sample-image/Screenshot%202025-07-15%20094155.png?raw=true" alt="Contact Info" width="60%" />
</p>

---

## 🚪 Logout Section

Clicking Logout:

- Shows a popup: `Logout successful`
- Redirects the user to the login page

<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Task-Management-Webapp/sample-image/Screenshot%202025-07-15%20094208.png?raw=true" alt="Logout Banner" width="40%" />
</p>

---


