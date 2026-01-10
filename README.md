# URL Shortner Backend

A simple **URL Shortener backend** built using **Node.js, Express, MongoDB, and EJS**.  
It allows users to generate short URLs, redirect them to original URLs, and view basic analytics through a minimal UI.

---

## 🚀 Features

- Generate short URLs from long links
- Redirect short URLs to original URLs
- Track visit history with timestamps
- Server-side rendered UI using EJS
- Display all generated URLs in a table
- Clean MVC-style folder structure

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- shortid / nanoid
- Nodemon

---

## 📂 Project Structure

```bash
url-shortner-backend/
├── controllers/
│   └── url.js
├── models/
│   └── url.js
├── routes/
│   ├── url.js
│   └── staticRouter.js
├── views/
│   └── home.ejs
├── connect.js
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```