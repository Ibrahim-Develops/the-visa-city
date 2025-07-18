import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',   
      port: 3306,          
      username: 'root',    
      password: '',
      database: 'visa', 
      autoLoadEntities: true,  
      synchronize: true,       
    }),
    UserModule,
    CountryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
