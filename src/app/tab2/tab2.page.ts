import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  listaSeries: ISerie[] = [
    {
      nome: 'Bob Esponja Calça Quadrada (1999)',
      lancamento: '04/03/2016',
      duracao: '12 temp',
      classificacao: 10,
      cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4LpJb1BMmbf92QGaHK2WxoV4Ijgjxy3VpNdUbYrfywcLvn0xQ',
      generos: ['familia','comédia','Animação'],
      pagina: '/bob-esponja',
      favorito: false
    },
    {
      nome: 'Supernatural (2005)',
      lancamento: '25/04/2005',
      duracao: '42 minutos',
      classificacao: 10,
      cartaz: 'https://i.pinimg.com/originals/cd/fa/a5/cdfaa54a0da22e4545985ed5193114a1.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação', 'Fantasia'],
      pagina: '/supernatural',
      favorito: true
    },
    {
      nome: 'Apenas um Show',
      lancamento: '06/09/2010',
      duracao: '8 temp',
      classificacao: 9,
      cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsu539QVMCtyd1jnfdmR9PC6270Y1jLGgM1WIsxz9gW_6k6Bk',
      generos: ['Comédia', 'Aventura','Drama','Animação'],
      pagina: '/apenas-um-show',
      favorito: false
    },
  ];

}
