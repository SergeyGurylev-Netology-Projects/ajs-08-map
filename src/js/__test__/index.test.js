import ErrorRepository from '../index';

const errorRepository = new ErrorRepository();

test.each([
  [0, 'Description error 0'],
  [1, 'Description error 1'],
  [2, 'Description error 2'],
  [3, 'Description error 3'],
  [4, 'Description error 4'],
  [5, 'Description error 5'],
])(
  ('test get error "%s" description'
  ),
  (errorCode, expected) => {
    const result = errorRepository.translate(errorCode);
    expect(result).toBe(expected);
  },
);

test('test get unknown error code', () => {
  const result = errorRepository.translate(6);
  expect(result).toBe('Unknown error');
});
