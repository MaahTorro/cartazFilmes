import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router
    ) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'One Piece: Z (2012)',
      lancamento: '15/04/2012',
      duracao: '108 minutos',
      classificacao: 10,
      cartaz: 'https://f001.backblazeb2.com/file/papocine/2022/04/20220414-one-piece-z-papo-de-cinema-cartaz.png',
      generos: ['Ação', 'Animação', 'Aventura'],
      pagina: '/onePiece',
      favorito: false
    },
    {
      nome: 'Invocação do mal (2013)',
      lancamento: '04/03/2013',
      duracao: '1h 52min',
      classificacao: 10,
      cartaz: 'https://br.web.img2.acsta.net/pictures/210/166/21016629_2013062820083878.jpg',
      generos: ['Terror','Suspense','Aventura'],
      pagina: '/incocacaoDoMal',
      favorito: false
    },
    {
      nome: 'O Lorax',
      lancamento: '19/07/2012',
      duracao: '1h 26min',
      classificacao: 8,
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/5/55/Lorax-poster.jpg',
      generos: ['Familia','Aventura'],
      pagina: '/oLorax',
      favorito: false
    },
    {
      nome: 'Homem Aranha: Sem volta pra casa',
      lancamento: '12/06/2021',
      duracao: '2h 28min',
      classificacao: 9,
      cartaz: 'https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG',
      generos: ['Ação', 'Aventura','Heróis'],
      pagina: '/homemAranha',
      favorito: false
    },
  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],navigationExtras);
  }

}
