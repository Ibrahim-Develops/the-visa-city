import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, } from '@nestjs/common';
import { Request, Response } from 'express';

export const apiResponse = (status: boolean, message: string, data: any = [], errorCode: number | null = null) => {
  return { status, errorCode, message, data, };
};

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception instanceof HttpException ? exception.getResponse() : exception.message || 'Internal server error';

    response.status(status).json({ status: false, errorCode: status, message: typeof message === 'string' ? message : (message as any).message, });
  }
}