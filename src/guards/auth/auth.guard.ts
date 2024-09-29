import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import jwtConfig from 'src/config/jwt.config';
import { ANONYMOUS_KEY } from 'src/decorators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
      private jwtService: JwtService,
      private reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
      const isAnonymous = this.reflector.getAllAndOverride<boolean>(ANONYMOUS_KEY, [
          context.getHandler(),
          context.getClass()
      ]);
      if (isAnonymous) {
          return true;
      }

      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      if (!token) {
          throw new UnauthorizedException();
      }
      try {
          const payload = await this.jwtService.verifyAsync(
              token,
              {
              secret: jwtConfig().secret
              }
          );
          request['userContext'] = payload;
      } catch {
          throw new UnauthorizedException();
      }
      return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
  }
}
