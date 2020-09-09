import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import path from 'path';

import dotenv = require('dotenv-safe');
dotenv.config();

import { default as logger, expressLogger } from './utils/logger';

import { ERROR_CODE } from './utils/response-codes';
import { ErrorResponseObject } from './utils/response-error-object';
import { ResponseObject } from './utils/response-object';

import { router as ApiRouter } from './api';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.error();
    this.error404();
  }

  private middleware = (): void => {
    this.express.set('trust proxy', true);

    this.express.use(compression());
    this.express.use(cookieParser());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));

    this.express.use(helmet());

    this.express.use(expressLogger);

    this.express.use(express.static(path.join(__dirname, 'public')));
    this.express.use((req: Request, res: Response, next: NextFunction) => {
      res.header(
        'Access-Control-Allow-Origin',
        process.env.ENV === 'PROD' ? process.env.ALLOW_ORIGIN : req.headers.origin
      );
      res.header('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
  };

  private routes = (): void => {
    this.express.use('/api', ApiRouter);

    this.express.get('/', (req: Request, res: Response) => {
      res.json(new ResponseObject(`Welcome to APP skeleton.`));
    });
  };

  private error404 = (): void => {
    this.express.use((req: Request, res: Response) => {
      res.status(ERROR_CODE.NOT_FOUND).json(new ErrorResponseObject('Not Found', ERROR_CODE.NOT_FOUND));
    });
  };

  private error = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.express.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
      logger.error(err, 'General Error Handler');
      res.status(ERROR_CODE.SERVER_ERROR).json(new ErrorResponseObject(err.message, ERROR_CODE.SERVER_ERROR));
    });
  };
}

export default new App().express;
