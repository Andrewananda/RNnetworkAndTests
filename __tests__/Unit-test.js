import 'react-native';
import React from 'react';

const {Utils} = require('../src/Component/Utils');

import renderer from 'react-test-renderer';

it('should check the matches and user', () => {
  const user = {
    name: 'Andrew Ananda',
    createdAt: new Date(),
  };

  expect(user).toMatchSnapshot({
    name: 'Andrew Ananda',
    createdAt: expect.any(Date),
  });
});

it('should check the matches user password', () => {
  const userPassword = {
    password: '1234',
    confirmPassword: '1234',
  };

  expect.assertions(1);

  let userData = Utils.CheckUserDetails(userPassword);
  expect(userData).toBe(1);
});
