
import { helloSvc } from '../services/helloSvc';

test('Greets someone', () => {
  const expected = `Hello World! Your function executed successfully`;
  const actual = helloSvc({name: 'World'});
  expect(actual).toBe(expected);
});