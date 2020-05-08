import { Normalize } from "../src/example";

describe('Example Class Definition', function () {
  test('Should return an array', function () {
    const NormalizedStr = Normalize('Cocinero', { lang: 'ES' });
    expect(Array.isArray(NormalizedStr)).toBeTruthy();
  });

  test('Should transform a string to upper case', function () {
    const NormalizedStr = Normalize('Cocinero', { lang: 'ES' });
    expect(NormalizedStr).toEqual(['COCINERO']);
  });

  test('Should transform a string with more than one word to upper case', function () {
    const NormalizedStr = Normalize('Cocinero Cocinero', { lang: 'ES' });
    expect(NormalizedStr).toEqual(['COCINERO', 'COCINERO']);
  });

  test('Should ignore diacritics', function () {
    const NormalizedStr = Normalize('Profesor Inglés', { lang: 'ES' });
    expect(NormalizedStr).toEqual(['PROFESOR', 'INGLES']);
  });

  test('Should ignore articles', function () {
    const NormalizedStr = Normalize('Profesor de Inglés', { lang: 'ES' });
    expect(NormalizedStr).toEqual(['PROFESOR', 'INGLES']);
  });
});
