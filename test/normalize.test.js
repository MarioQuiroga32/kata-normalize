import { Normalize } from "../src/example";

// Cocinero -> COCINERO
// Normalizar frases:
//     Buscar:
//         Lang code: “ES”
//   “Cocinero,” -> [“COCINERO”]
// “profesor inglés” -> [“PROFESOR”, “INGLES”]
// “profesor de inglés” -> [“PROFESOR”, “INGLES”]   - stop word
//   “COCINEROS” -> [“COCINERO”]
// “PROFESORES” -> [“PROFESORE”]
// “áäà” -> [“AAA”]
// Lang code: “AR”
//    “plural” : quitar s del principio
// preposiciones: son otras.
//     Mayusculas, minusculas.
// Acentos.
// Plurales.

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
});
