// @ts-check

import os from 'os';
import path from 'path';
import { promises as fs } from 'fs';
import getFunction from '../functions.js';

const prettifyHTMLFile = getFunction();

// BEGIN (write your solution here)
const getFixturePath = (name) => path.join('__fixtures__', name);

const filename = 'before.html';
const dest = path.join(os.tmpdir(), filename);
const src = getFixturePath(filename);

let expected;

beforeAll(async () => {
  expected = await fs.readFile(getFixturePath('after.html'), 'utf-8');
});

beforeEach(async () => {
  await fs.copyFile(src, dest);
});

test('prettifyHTMLFile', async () => {
  await prettifyHTMLFile(dest);
  const actual = await fs.readFile(dest, 'utf-8');
  expect(actual).toBe(expected);
});
// END
