import test from 'node:test';
import assert from 'node:assert/strict';
import { adicionarNome } from '../src/cadastro.js';

test('adiciona um nome ao final da lista', () => {
  assert.deepEqual(adicionarNome(['Genilson', 'Maria'], 'João'), [
    'Genilson', 'Maria', 'João'
  ]);
});

test('remove espaços antes e depois do nome', () => {
  assert.deepEqual(adicionarNome([], '  Ana  '), ['Ana']);
});

test('não adiciona texto vazio ou só com espaços', () => {
  const lista = ['Maria'];
  assert.deepEqual(adicionarNome(lista, '   '), ['Maria']);
  assert.equal(adicionarNome(lista, '   '), lista);
});

test('não altera a lista original', () => {
  const listaOriginal = ['Genilson'];
  const resultado = adicionarNome(listaOriginal, 'Maria');
  assert.deepEqual(listaOriginal, ['Genilson']);
  assert.deepEqual(resultado, ['Genilson', 'Maria']);
});
