import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import Link from '../src/Component/Link';

it('renders link', () => {
  const tree = renderer
    .create(<Link page="http://www.instagram.com" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
