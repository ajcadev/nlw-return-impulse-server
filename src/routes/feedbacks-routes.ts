import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log: ['query'] })

const feedbacksRoutes = Router()

feedbacksRoutes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body
  await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })
  return res.status(201).send()
})

export { feedbacksRoutes }
