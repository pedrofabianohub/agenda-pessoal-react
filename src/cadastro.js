export function adicionarNome(lista, nome) {
  const nomeTratado = nome.trim();

  if (!nomeTratado) {
    return lista;
  }

  return [...lista, nomeTratado];
}
