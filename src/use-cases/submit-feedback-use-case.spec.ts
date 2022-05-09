/* eslint-disable @typescript-eslint/no-empty-function */
import { SubmitFeedbackUseCase } from './submit-feedback-use-case'

describe('SubmitFeedback UseCase', () => {
  test('should to submit a feedback', async () => {
    const sut = new SubmitFeedbackUseCase(
      { create: async () => {} },
      { sendMail: async () => {} }
    )
    const httpRequest = {
      type: 'any_type',
      comment: 'any_comment',
      screenshot: 'any_screenshot'
    }
    await expect(sut.execute(httpRequest)).resolves.not.toThrow()
  })
})
