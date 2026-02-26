# Feedback Submission System

A full-stack feedback submission system built with React, Express, and MongoDB.

## Project Structure

```
webdev-full-02-feedback-system/
├── server/              # Express backend
│   ├── server.js       # Main server file
│   ├── package.json
│   └── .env
├── client/             # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FeedbackForm.js
│   │   │   ├── FeedbackList.js
│   │   │   └── *.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── *.css
│   └── package.json
└── ERRORS_DOCUMENT.md  # List of intentional bugs
```

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB running locally on port 27017

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
npm install
```

2. Make sure MongoDB is running:
```bash
mongod
```

3. Start the server:
```bash
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. In a new terminal, navigate to the client directory:
```bash
cd client
npm install
```

2. Start the React development server:
```bash
npm start
```

The client will run on `http://localhost:3000`

## Features

- Submit feedback with name, email, message, and rating
- View all submitted feedback
- Edit existing feedback
- Delete feedback
- Responsive design with gradient UI

## Important

This project contains **5 intentional bugs** for debugging practice.
See `ERRORS_DOCUMENT.md` for a list of the issues.

Do not look at the errors document until you've tried to identify the bugs yourself!
