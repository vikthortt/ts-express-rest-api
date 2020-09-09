/* eslint-disable @typescript-eslint/no-explicit-any */
import request from 'supertest';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import app from '@src/app';

describe('GET /', () => {
  it('should return 200', (done) => {
    request(app).get('/').expect(200, done);
  });

  it('should return JSON object', (done) => {
    request(app)
      .get('/')
      .then((res: any) => {
        expect(res.headers).toHaveProperty('content-type');
        expect(res.headers['content-type']).toMatch('application/json');
        done();
      });
  });

  it('should return object response', (done) => {
    request(app)
      .get('/')
      .then((res: any) => {
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('data');
        done();
      });
  });
});

describe('GET /invalid/path', () => {
  it('should return 404', (done) => {
    request(app).get('/invalid/path').expect(404, done);
  });

  it('should return JSON object', (done) => {
    request(app)
      .get('/no/existe')
      .then((res: any) => {
        expect(res.headers).toHaveProperty('content-type');
        expect(res.headers['content-type']).toMatch('application/json');
        done();
      });
  });

  it('should return object response', (done) => {
    request(app)
      .get('/no/existe')
      .then((res: any) => {
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body).toHaveProperty('data');
        done();
      });
  });

  it('should return not found message and 404 statusCode', (done) => {
    request(app)
      .get('/no/existe')
      .then((res: any) => {
        expect(res.body).toHaveProperty('message', 'Not Found');
        expect(res.body).toHaveProperty('statusCode', 404);
        done();
      });
  });
});
