import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import * as dotenv from "dotenv";

dotenv.config();

export class MailTrapProvider implements IMailProvider {
  private transporter!: Mail;

  constructor() {
    const {
      MAIL_TRAP_USER,
      MAIL_TRAP_PASS,
      MAIL_TRAP_HOST,
    } = process.env;

    if (MAIL_TRAP_USER && MAIL_TRAP_PASS && MAIL_TRAP_HOST) {
      this.transporter = nodemailer.createTransport({
        host: MAIL_TRAP_HOST,
        port: 2525,
        auth: {
          user: MAIL_TRAP_USER,
          pass: MAIL_TRAP_PASS
        }
      });
    }

  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        address: message.to.email,
        name: message.to.name,
      },
      from: {
        address: message.from.email,
        name: message.from.name,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
