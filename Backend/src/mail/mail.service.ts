import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async create(data: any) {
    await this.mailerService.sendMail({
      to: 'thevisacity0@gmail.com',
      subject: 'New Messages Added In Dashboard',
      html: `
        <h2>New Contact Details</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Subject:</b> ${data.subject}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    });
  }
}