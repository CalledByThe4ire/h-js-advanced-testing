// @ts-check

import getFunction from '../functions.js';

const buildUser = getFunction();

// BEGIN (write your solution here)
test('buildUser random', () => {
  const user1 = buildUser();
  const user2 = buildUser();
  expect(user1).not.toEqual(user2);
});

test('buildUser override', () => {
  const newData1 = {
    email: 'test@email.com',
  };
  const user1 = buildUser(newData1);
  expect(user1).toMatchObject(newData1);
});
// END
