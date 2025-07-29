import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { apiResponse } from 'src/helper';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createuser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto).then((result) => {
      return apiResponse(true, 'User created successfully');
    })
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.userService.login(loginUserDto).then((result) => {
      return apiResponse(true, 'Login successful', result);
    });
  }
}
