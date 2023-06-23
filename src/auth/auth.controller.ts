import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
  Response,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginReqDTO } from './dto/login.req.dto';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('auth')
  @UsePipes(ValidationPipe)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(@Request() req, @Response() res, @Body() body: LoginReqDTO) {
    try {
      const tokens = await this.authService.login(req.user);
      res.send(tokens);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
