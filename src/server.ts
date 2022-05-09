import express from 'express'
import { feedbacksRoutes } from './routes/feedbacks-routes'

const port = process.env.PORT || 3333
const app = express()

app.use(express.json())
app.use(feedbacksRoutes)

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`)
})
