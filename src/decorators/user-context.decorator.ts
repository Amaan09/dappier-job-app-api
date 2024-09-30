import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserContextHelper = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return {
        userId: request.userContext.userId,
        userEmail: request.userContext.email
    }
  },
);
