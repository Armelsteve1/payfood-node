const { signup } = require('../controllers/auth.controller');

test('Signup should register a new user', () => {
  const req = {
    body: {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      roles: ['user']
    }
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn()
  };
  signup(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith({ message: "User was registered successfully!" });
});
