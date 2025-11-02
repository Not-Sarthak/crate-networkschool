import dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import cors from 'cors'
import scrapeRouter from './routes/scrape.js'
import generateRouter from './routes/generate.js'
import refineRouter from './routes/refine.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(
  cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
)

app.options('*', cors())

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
