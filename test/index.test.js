const { normalize, tokenize, stem, uuid } = require('../src');

describe('@kuotie/core', () => {
  describe('Normalize', () => {
    test('It should normalize a text', () => {
      const input = 'àñÍS';
      const expected = 'anis';
      const actual = normalize(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Tokenize', () => {
    test('It should tokenize a text', () => {
      const input = 'this Should,  , be.splitted';
      const expected = ['this', 'Should', 'be', 'splitted'];
      const actual = tokenize(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('Stem', () => {
    test('It should return input', () => {
      const input = ['this', 'Should', 'be', 'splitted'];
      const actual = stem(input);
      expect(actual).toBe(input);
    });
  });

  describe('uuid', () => {
    test('It should return a valid uuid', () => {
      const id = uuid();
      expect(id).toBeDefined();
      expect(id).toHaveLength(36);
      expect(id[8]).toEqual('-');
      expect(id[13]).toEqual('-');
      expect(id[18]).toEqual('-');
      expect(id[23]).toEqual('-');
    });
  });
});
