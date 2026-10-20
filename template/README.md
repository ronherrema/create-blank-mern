## My MERN App

Express serves a Vite + React app, with MongoDB via Mongoose.

### Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Check http://localhost:3000/api/health to confirm the server responds.

### Environment variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Restart the server after changing `.env`.

### Connecting MongoDB

1. Put your connection string in `.env` as `MONGODB_URI=my_connection_string` (without quotes)
2. Uncomment the `mongoose.connect(...)` block in `server.js`.

### Scripts

- `npm run dev`: start the server with nodemon and Vite hot reload
- `npm run build`: build the React app for production
- `npm start`: run in production mode 
