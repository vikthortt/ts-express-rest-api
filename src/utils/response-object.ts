export class ResponseObject<T> {
  public data: T;
  public statusCode: number;
  public message: string;

  constructor(data: T, status = 200, message = 'success') {
    this.data = data;
    this.statusCode = status;
    this.message = message;
  }
}
