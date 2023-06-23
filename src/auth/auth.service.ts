import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  private readonly users = [
    {
      id: 1,
      name: 'john',
      email: 'john@example.com',
      password: '123456',
    },
    {
      id: 2,
      name: 'maria',
      email: 'maria@example.com',
      password: 'guess',
    },
    {
      id: 3,
      name: 'alice',
      email: 'alice@example.com',
      password: 'alice',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async validate(email: string, pass: string) {
    const user = await this.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return result;
  }

  async login(user: User) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: this.configService.get('JWT_SECRET_KEY'),
        expiresIn: `${this.configService.get('JWT_EXPIRATION_TIME')}`,
      }),
    };
  }
}
