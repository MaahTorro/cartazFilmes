import { Component } from '@angular/core';
import { IAtor } from '../model/IAtor';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  listaAtores: IAtor[] = [
    {
      nome: 'Morgan Freeman',
      nascimento: '01/06/1937',
      idade: '86 anos',
      classificacao: 10,
      cartaz: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSywMEfpJWqOAwy0t-ue5_fS4JPxLnXuifXx-CuYgH39q3B0Mdm',
      generos: ['Ator','Dublador'],
      pagina: '/morgan-freeman',
      favorito: false
    },
    {
      nome: 'Adam Sandler',
      nascimento: '09/09/1966',
      idade: '57 anos',
      classificacao: 9,
      cartaz: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR0zqNv45WkSoIGg1bvbOrsuPFLmQ_TE7Jz-MbwOBTlMv_qBAy35TdboCr3u7aR6z2F',
      generos: ['Ator','Comediante','Dublador'],
      pagina: '/adam-sandler',
      favorito: false
    },
    {
      nome: 'Pedro Pascal',
      nascimento: '02/04/1975',
      idade: '48 anos',
      classificacao: 8,
      cartaz: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ7Y5Dqmu9vwUNk_A5fYO9Q-EdLk8CnrsujULRX0OWDHSUtWlRRTsjwnBFnT0xwdQsG',
      generos: ['Ator',],
      pagina: '/pedro-pascal',
      favorito: false
    },
  ];

}
