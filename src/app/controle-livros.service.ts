import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros = [
    new Livro(1, 1, 'Livro 1', 'Resumo do livro 1', ['Autor 1', 'Autor 2']),
    new Livro(2, 2, 'Livro 2', 'Resumo do livro 2', ['Autor 3']),
    new Livro(3, 3, 'Livro 3', 'Resumo do livro 3', ['Autor 4']),
  ];

  obterLivros() {
    return this.livros;
  }

  incluir(livro: Livro) {
    console.log('first');
    console.log(typeof livro.codEditora);
    const ultimoCodigo =
      this.livros.length > 0 ? this.livros[this.livros.length - 1].codigo : 0;
    livro.codigo = ultimoCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number) {
    const indice = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (indice >= 0) {
      this.livros.splice(indice, 1);
    }
  }
}
