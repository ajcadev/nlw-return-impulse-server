import { MailAdapter, SendMailData } from '../mail-adapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '5b1e8dcab51a39',
    pass: 'a303737fe6a91d'
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Cardoso <cardoso.rr@hotmail.com>',
      subject,
      html: body
    })
  }
}
