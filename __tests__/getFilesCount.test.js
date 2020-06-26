// @ts-check

import path from 'path';
import _ from 'lodash';
import getFunction from '../functions.js';

const getFilesCount = getFunction();

const getFixturePath = (name) => path.join('__fixtures__', name);

// BEGIN (write your solution here)
describe('dependency injection', () => {
  test('flat', () => {
    expect(getFilesCount(getFixturePath('flat'), () => {})).toBe(3);
  });
  test('nested', () => {
    expect(getFilesCount(getFixturePath('nested'), () => {})).toBe(4);
  });
});
// END
