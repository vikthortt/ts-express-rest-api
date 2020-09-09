import express, { Request, Response } from 'express';
const router = express.Router();

import { ResponseObject } from '@src/utils/response-object';

router.get('/', (req: Request, res: Response) => {
  res.json(new ResponseObject(`Welcome to API skeleton.`));
});

export { router };
