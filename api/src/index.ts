import dotenv from 'dotenv'

// Load environment variables FIRST before importing routes
dotenv.config()

import express from 'express'
import cors from 'cors'
import scrapeRouter from './routes/scrape.js'
import generateRouter from './routes/generate.js'
import refineRouter from './routes/refine.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use('/api/scrape', scrapeRouter)
app.use('/api/generate', generateRouter)
app.use('/api/refine', refineRouter)

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`)
})
