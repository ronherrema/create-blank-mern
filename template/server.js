import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import ViteExpress from 'vite-express'

// load variables from .env file
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// convert any arriving JSON text into a usable JavaScript object
app.use(express.json())

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

// test the route — visit /api/health to confirm
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// serve the app with hot reload in dev, or built files in production
ViteExpress.listen(app, PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})