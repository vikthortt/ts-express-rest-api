import { ResponseObject } from './response-object';
import { ERROR_CODE } from './response-codes';

export class ErrorResponseObject extends ResponseObject<string> {
  constructor(errorMessage: string, errorType: ERROR_CODE = ERROR_CODE.SERVER_ERROR) {
    switch (errorType) {
      case ERROR_CODE.BAD_REQUEST:
        super(errorMessage, 400, 'Bad Request');
        break;
      case ERROR_CODE.UNAUTHORIZED:
        super(errorMessage, 401, 'Unauthorized');
        break;
      case ERROR_CODE.FORBIDDEN:
        super(errorMessage, 403, 'Forbidden');
        break;
      case ERROR_CODE.NOT_FOUND:
        super(errorMessage, 404, 'Not Found');
        break;
      case ERROR_CODE.SERVER_ERROR:
      default:
        super(errorMessage, 500, 'Internal Server Error');
        break;
    }
  }
}
