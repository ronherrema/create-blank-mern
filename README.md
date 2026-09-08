# create-blank-mern


## Environment

- Blank React component
- Express server with a single `/api/health` route
- Hot reload via `vite-express` (no rebuild-on-save)
- MongoDB connection via Mongoose, extendable with your own models/routes

## Usage

```bash
npx create-blank-mern my-app-name
cd my-app-name
npm install
cp .env.example .env
# Edit .env with your MongoDB connection string
npm run dev
```

Visit `http://localhost:3000` — React app and Express API run on the same port.

## Production

```bash
npm run build
npm start
```

