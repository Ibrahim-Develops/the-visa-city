import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { CountryModule } from './country/country.module';
import { JwtMiddleware } from './middlewares/jwt.middleware';
import { Country } from './country/entities/country.entity';
import { ContactModule } from './contact/contact.module';
import { BlogModule } from './blog/blog.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StepModule } from './step/step.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [User, Country],
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    UserModule,
    CountryModule,
    ContactModule,
    BlogModule,
    MailModule,
    StepModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude({ path: 'user/login', method: RequestMethod.POST })
      .forRoutes(
        { path: 'country/create', method: RequestMethod.POST },
        { path: 'country/delete/:id', method: RequestMethod.DELETE },
        { path: 'country/all', method: RequestMethod.GET },
      );
  }
}
