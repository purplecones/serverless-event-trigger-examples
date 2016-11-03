import { helloSvc, timesTwo } from '../services/helloSvc';

test('Greets someone', () => {
  const expected = `Hello World! Your function executed successfully!!`;
  const actual = helloSvc({name: 'World'});
  expect(actual).toBe(expected);
});

test('multiply by two', () => {
  const expected = 4;
  const actual = timesTwo(2);
  expect(actual).toBe(expected);
});
