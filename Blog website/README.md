# 📝 Blog Website-Blog Space

**Blog Space** is a full-featured blog application built using the **MERN stack** (MongoDB, Express, React, Node.js). It provides user authentication, blog creation, image uploading, category filtering, review functionality, and a clean responsive UI using **Material UI**.

🔗you can view the live app here → **[Live App on Vercel](https://blog-space-blog-website.netlify.app)** 
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
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Blog%20website/sample-image/Screenshot%202025-07-15%20080726.png?raw=true" alt="Login" width="45%" />
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Blog%20website/sample-image/Screenshot%202025-07-15%20080804.png?raw=true" alt="Signup" width="45%" />
</p>

---

## 🏠 Home Section

After login, users are redirected to the **Home Page**. The **Navbar** contains:

- **Home**
- **About**
- **Contact**
- **Logout**

<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Blog%20website/sample-image/Screenshot%202025-07-17%20180807.png?raw=true" alt="Home Section" width="80%" />
</p>

- 📌 **Left Section:** Blog categories  
- 📰 **Right Section:** List of blogs based on selected category

---
## 📄 Create Blog Section

When create blog button is clicked, it opens up a window with:
- **Title**
- **Image**
- **Description**
  user can insert image of their choice here and write titile and description of theri blog, publish saves the blog in the databse.
<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Blog%20website/sample-image/Screenshot%202025-07-15%20082150.png?raw=true" alt="Blog View 1" width="45%" />

</p>
  
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
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Blog%20website/sample-image/Screenshot%202025-07-15%20082650.png?raw=true" alt="Blog View 1" width="45%" />
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Blog%20website/sample-image/Screenshot%202025-07-15%20082751.png?raw=true" alt="Blog View 2" width="45%" />
</p>

---

## ✏️ Update Blog Section

Owners can update blogs:

- The form is pre-filled with existing blog data
- On save, blog updates and redirects back to the blog view

<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Blog%20website/sample-image/Screenshot%202025-07-15%20083021.png?raw=true" alt="Update Blog" width="60%" />
</p>

---

## 🙋 About Section

This section introduces the creator of Blog Space and the motivation behind the project.

<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Blog%20website/sample-image/Screenshot%202025-07-15%20082843.png?raw=true" alt="About Me" width="60%" />
</p>

---

## 📬 Contact Section

Users can get in touch via:

- LinkedIn
- GitHub
- Email

<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Blog%20website/sample-image/Screenshot%202025-07-15%20082853.png?raw=true" alt="Contact" width="60%" />
</p>

---

## 🚪 Logout

On clicking the Logout button:

- A popup appears: `"Logout Successful"`
- User is redirected to the login screen

<p align="center">
  <img src="https://github.com/gh4aniket/CANTILEVER/blob/main/Blog%20website/sample-image/Screenshot%202025-07-15%20082902.png?raw=true" alt="Logout Popup" width="40%" />
</p>

---

