import { Component, OnInit, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit
{
  public coracaoCheio: string = '/assets/coracao_cheio.png'
  public coracaoVazio: string = '/assets/coracao_vazio.png'
  
  @Input() public tentativas: number
  public coracoes: Coracao[] = [    
    new Coracao(true), //INSTANCIANDO COMO TRUE ==> RETORNARÁ CORAÇAO CHEIO
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() 
  {
    console.log(this.coracoes)
  }
/*
  ngOnChanges(){
    //console.log('tentativas recebidas no painel: ', this.tentativas)
    console.log(this.coracoes)
    console.log('ngOnChanges')
    
    //(this.tentativas != this.coracoes.length){
     // let indice = this.coracoes.length - this.tentativas

      // 3 - 2 = 1

      this.coracoes[indice - 1].cheio = false
    }
  }
*/
  ngOnInit(): void {
  //  console.log('tentativas recebidas no painel: ', this.tentativas)
  }

}
