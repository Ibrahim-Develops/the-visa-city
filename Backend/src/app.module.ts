import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { CountryModule } from './country/country.module';
import { JwtMiddleware } from './middlewares/jwt.middleware';
import { Country } from './country/entities/country.entity';
import { ContactModule } from './contact/contact.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'visa',
      entities: [User, Country],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    CountryModule,
    ContactModule,
    BlogModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude(
        { path: 'user/login', method: RequestMethod.POST },
      )
      .forRoutes(
        { path: 'user/create', method: RequestMethod.POST },
        { path: 'country/create', method: RequestMethod.POST },
        { path: 'country/delete/:id', method: RequestMethod.DELETE },
        { path: 'country/all', method: RequestMethod.GET },
      );
  }
}