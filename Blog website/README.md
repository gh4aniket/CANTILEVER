# 📝 Blog Space

**Blog Space** is a full-featured blog application built using the **MERN stack** (MongoDB, Express, React, Node.js). It provides user authentication, blog creation, image uploading, category filtering, review functionality, and a clean responsive UI using **Material UI**.

---

## 🔧 Technologies & Tools

- **Frontend:** React.js + Material UI
- **Backend:** Node.js + Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JSON Web Tokens (JWT)
- **Image Uploads:** Multer + GridFS
- **Other Packages:**
  - `dotenv` – environment variable management
  - `cors` – Cross-Origin Resource Sharing
  - `bcryptjs` – password hashing
  - `axios` – HTTP client
  - `jsonwebtoken` – secure token-based auth
  - `react-router-dom` – frontend routing
  - `mongoose` – ODM for MongoDB

---

## 🔐 Login Section

Users can **log in using username and password** or **create a new account**.

<p align="center">
  <img src="#login-image-url" alt="Login" width="45%" />
  <img src="#signup-image-url" alt="Signup" width="45%" />
</p>

---

## 🏠 Home Section

After login, users are redirected to the **Home Page**. The **Navbar** contains:

- **Home**
- **About**
- **Contact**
- **Logout**

<p align="center">
  <img src="#home-section-image-url" alt="Home Section" width="80%" />
</p>

- 📌 **Left Section:** Blog categories  
- 📰 **Right Section:** List of blogs based on selected category

---

## 📄 Blog Section

When a blog is clicked, it opens up with:

- **Title**
- **Image**
- **Author**
- **Date**
- **Description**
- **Update/Delete** buttons (if user is the owner)
- **Review Section** for public comments

<p align="center">
  <img src="#blog-view-image-1" alt="Blog View 1" width="45%" />
  <img src="#blog-view-image-2" alt="Blog View 2" width="45%" />
</p>

---

## ✏️ Update Blog Section

Owners can update blogs:

- The form is pre-filled with existing blog data
- On save, blog updates and redirects back to the blog view

<p align="center">
  <img src="#update-blog-image-url" alt="Update Blog" width="60%" />
</p>

---

## 🙋 About Section

This section introduces the creator of Blog Space and the motivation behind the project.

<p align="center">
  <img src="#about-section-image-url" alt="About Me" width="60%" />
</p>

---

## 📬 Contact Section

Users can get in touch via:

- LinkedIn
- GitHub
- Email

<p align="center">
  <img src="#contact-section-image-url" alt="Contact" width="60%" />
</p>

---

## 🚪 Logout

On clicking the Logout button:

- A popup appears: `"Logout Successful"`
- User is redirected to the login screen

<p align="center">
  <img src="#logout-popup-image-url" alt="Logout Popup" width="40%" />
</p>

---

## 📁 Folder Structure (High-Level)

