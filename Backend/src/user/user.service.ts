import { Injectable, NotFoundException, UnauthorizedException, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
    private dataSource: DataSource,
  ) { }

  async createUser(createUserDto: CreateUserDto) {
    const { userName, password } = createUserDto;

    const existingUser = await User.existingUser({ where: { userName } }, this.dataSource);
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = this.userRepository.create({
      userName,
      password: hashedPassword,
    });

    await this.userRepository.save(newUser);

    return { userId: newUser.id }
  }

  async login(loginUserDto: LoginUserDto) {
    const { userName, password } = loginUserDto;

    const user = await User.existingUser({ where: { userName } }, this.dataSource);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { id: user.id, username: user.userName };
    const token = this.jwtService.sign(payload);
     
    return token;
  }
}
