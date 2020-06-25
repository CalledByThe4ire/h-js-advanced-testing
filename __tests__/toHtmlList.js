// @ts-check

import { promises as fs } from 'fs';
import path from 'path';
import getFunction from '../functions.js';

const toHtmlList = getFunction();

// BEGIN (write your solution here)
const getFixturePath = (filename) =>
  path.join(path.resolve(), '__fixtures__', filename);
const readFile = (filename) => fs.readFile(getFixturePath(filename), 'utf-8');

let expected;
const formats = ['csv', 'json', 'yml'];

beforeAll(async () => {
  expected = (await readFile('result.html')).toString().trim();
});

test.each(formats)('to HTML List', async (format) => {
  const actual = await toHtmlList(getFixturePath(`list.${format}`));
  expect(actual).toBe(expected);
});
// END
