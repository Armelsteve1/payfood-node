const request = require('supertest');
const authJwt = require('../middlewares/authJwt');
const express = require("express");
const app = express();

describe('Auth Middlewares', () => {
  describe('isRestaurateur', () => {
    it('should return 403 if user is not restaurateur', async () => {
      const token = 'votre-token-factice';
      const res = await request(app)
        .get('http://localhost:8080/api/test/restaurateur')
        .set('x-access-token', token);
      expect(res.status).toBe(403);
      expect(res.body.message).toBe('Nécessite le rôle de restaurateur !');
    });

    it('should call next() if user is restaurateur', async () => {
      jest.spyOn(authJwt, 'User.findById').mockImplementation((userId, callback) => {
        const user = { roles: ['restaurateur'] };
        callback(null, user);
      });
      const token = 'votre-token-factice';
      const res = await request(app)
        .get('http://localhost:8080/api/test/restaurateur')
        .set('x-access-token', token);
      expect(res.status).toBe(200);
    });
  });

  describe('isUser', () => {
    it('should return 403 if user is not a regular user', async () => {
      const token = 'votre-token-factice';
      const res = await request(app)
        .get('http://localhost:8080/api/test/user')
        .set('x-access-token', token);
      expect(res.status).toBe(403);
      expect(res.body.message).toBe('Nécessite le rôle de User !');
    });

    it('should call next() if user is a regular user', async () => {
      jest.spyOn(authJwt, 'User.findById').mockImplementation((userId, callback) => {
        const user = { roles: ['user'] };
        callback(null, user);
      });
      const token = 'votre-token-factice';
      const res = await request(app)
        .get('http://localhost:8080/api/test/user')
        .set('x-access-token', token);
      expect(res.status).toBe(200);
    });
  });
});
