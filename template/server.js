import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import ViteExpress from 'vite-express'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

ViteExpress.listen(app, PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
