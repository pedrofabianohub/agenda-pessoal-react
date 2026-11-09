import { useState } from 'react';
import { adicionarNome as registrarNome } from './cadastro.js';

export default function App() {
  const [novoNome, setNovoNome] = useState('');
  const [listaPessoas, setListaPessoas] = useState(['Genilson', 'Maria']);

  function salvarCadastro(event) {
    event.preventDefault();
    const listaAtualizada = registrarNome(listaPessoas, novoNome);

    if (listaAtualizada !== listaPessoas) {
      setListaPessoas(listaAtualizada);
      setNovoNome('');
    }
  }

  return (
    <main className="cadastro-app">
      <section className="cartao-cadastro">
        <header className="topo-cadastro">
          <p className="destaque">Agenda pessoal</p>
          <h1>Registrar pessoa</h1>
        </header>

        <form className="formulario-cadastro" onSubmit={salvarCadastro}>
          <input
            type="text"
            value={novoNome}
            onChange={(event) => setNovoNome(event.target.value)}
            placeholder="Digite o nome completo"
            aria-label="Digite o nome completo"
          />
          <button type="submit">Salvar</button>
        </form>

        <div className="lista-cadastro">
          <table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
              </tr>
            </thead>
            <tbody>
              {listaPessoas.map((pessoa, indice) => (
                <tr key={`${indice}-${pessoa}`}>
                  <td>{indice + 1}</td>
                  <td>{pessoa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
