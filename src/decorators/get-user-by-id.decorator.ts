import { createParamDecorator } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common";

export const GetUserById = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);