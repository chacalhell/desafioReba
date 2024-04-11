import 'react-native';
import React from 'react';
import {Loading} from './loading';

import {it} from '@jest/globals';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Loading />);
});
