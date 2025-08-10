import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        port: 587,
        secure: false,
        auth: {
          user: 'apikey',
          pass: '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',
        },
      },
      defaults: {
        from: '"The Visa City" <ibrahimdevelopss@gmail.com>',
      }
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule { }
