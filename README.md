# MERN Image Sharing App

A full-stack image-sharing application built using the MERN stack. Users can upload images with captions and view posts in a feed.

## 🚀 Features

- Upload images with captions
- Display posts in a feed
- Store post information in MongoDB
- Upload and manage images using ImageKit
- REST API built with Express.js
- Responsive frontend built with React

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- Axios (if used)
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- ImageKit SDK
- CORS
- dotenv

## 📋 Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [MongoDB](https://www.mongodb.com/) database
- [ImageKit](https://imagekit.io/) account

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/rohitprajapati7058-lgtm/mern-image-sharing-app.git
cd mern-image-sharing-app
```

### 2. Install backend dependencies

Open a terminal in the backend folder:

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder and add the environment variables required by your code:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Replace these example values with your actual configuration. Variable names must match those used in your backend code.

Start the backend:

```bash
npm start
```

If your backend does not have a `start` script, use the appropriate command from its `package.json`, such as `node server.js` or `node index.js`.

### 3. Install frontend dependencies

Open another terminal in the project root or frontend folder, depending on your folder structure:

```bash
cd frontend
npm install
npm run dev
```

If your React frontend is in the root directory, run `npm install` and `npm run dev` there instead.

### 4. Open the application

Vite will display a local URL in the terminal, usually:

`http://localhost:5173`

Open that URL in your browser.

Make sure the backend and frontend are both running.

## 🔐 Environment Variables

Never upload your `.env` file or expose your database password, ImageKit private key, or other secrets on GitHub.

## 📁 Project Structure

The project may follow a structure similar to this:

```text
mern-image-sharing-app/
├── backend/
│   ├── models/
│   ├── services/
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   └── package.json
├── .gitignore
└── README.md
```

Update this structure to match your actual folders.

## 👨‍💻 Author

Rohit Prajapati
