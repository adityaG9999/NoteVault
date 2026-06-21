# CloudNotes

CloudNotes (formerly iNotebook) is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to securely store and manage their notes in the cloud. It features a sleek, modern dark-mode aesthetic with custom purple and indigo accents.

## Features

- **User Authentication**: Secure login and signup functionality using JSON Web Tokens (JWT).
- **CRUD Operations**: Create, read, update, and delete notes.
- **Pin Notes**: Easily pin important notes to the top of your list for quick access. Pinned notes feature an updated UI with a solid gold pin icon.
- **Modern Dark UI**: A global dark-mode design overriding default Bootstrap styles, ensuring high contrast, readability, and a premium feel.
- **Responsive Design**: fully responsive UI built with Bootstrap 5.

## Tech Stack

- **Frontend**: React.js, Context API (for state management), React Router, Bootstrap 5, FontAwesome
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)

## Getting Started

### Prerequisites
- Node.js installed on your machine
- MongoDB instance (local or Atlas) running

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd iNotebook-React-master
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   *Make sure you have a `.env` file or proper MongoDB connection string configured in `db.js`.*

3. **Frontend Setup**
   Open a new terminal in the project root:
   ```bash
   npm install
   ```

### Running the Application

You can start both the frontend and backend servers simultaneously from the root directory using `concurrently`:

```bash
npm run both
```

Alternatively, you can run them separately:
- **Backend**: `cd backend && nodemon index.js` (runs on `http://localhost:5000`)
- **Frontend**: `npm start` (runs on `http://localhost:3000`)


## Author

**Aditya Gajare** — [GitHub](https://github.com/adityaG9999)

## License

This project is open source and available for educational purposes.
