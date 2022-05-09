import { Router } from 'express'
import { NodemailerMailAdapter } from '../adapters/nodemailer/nodemailer-email-adapter'
import { PrismaFeedbacksRepository } from '../repositories/prisma/prisma-feedbacks-repository'
import { SubmitFeedbackUseCase } from '../use-cases/submit-feedback-use-case'

const feedbacksRoutes = Router()

feedbacksRoutes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  )
  await submitFeedbackUseCase.execute({ type, comment, screenshot })
  return res.status(201).send()
})

export { feedbacksRoutes }
