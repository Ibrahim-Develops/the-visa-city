import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { apiResponse } from 'src/helper'

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
      return res
        .status(401)
        .json(apiResponse(false, 'Authorization token is required', null, 401));
    }

    try {
      const decoded = jwt.verify(token, "0000") as { id: number };
      
      if (!decoded.id) {
        return res
          .status(401)
          .json(apiResponse(false, 'Invalid token', null, 401));
      }

      req.user = decoded;

      next();
    } catch (error) {
      
      return res
        .status(401)
        .json(apiResponse(false, 'Invalid or expired token', null, 401));
    }
  }
}
