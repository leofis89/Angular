
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

/**IMPORTADOS MANUALEMNTE. */
import { Frase } from "../shared/frase.model";
import { FRASES } from "./frases-mock";


@Component({
	selector: 'app-painel',
	templateUrl: './painel.component.html',
	styleUrls: ['./painel.component.css']
})

/*OnInit => vibiabiliza a inclusao de 
um metodo do cilco de vida do componente*/

export class PainelComponent implements OnInit {

    public frases: Frase[] = FRASES /**FRASES PEGAS DO MOCK */
    public texto: string = "Traduza a frase:"
    public resposta: string = ""
    public rodada: number = 0
    public rodadaFrase: Frase

    public progresso: number = 0

    public tentativas: number = 3

    @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

    public coracaoCheio: string = '/assets/coracao_cheio.png'
    public coracaoVazio: string = '/assets/coracao_vazio.png'

    constructor() {
        this.rodadaFrase = this.frases[this.rodada] // Pega FRASE[0], FRASE[1], FRASE[2] ...
        //console.log(this.rodadaFrase)
        //console.log(this.rodadaFrase.frasePt)
    }

	ngOnInit(): void {

	}

  // FUNÇÃO DE ATUALIZAR RESPOSTA NO TEXT-AREA:

    public atualizaResposta(resposta: Event): void {
		/**
       * AO TENTAR DAR CONSOLE : console.log(resposta.target.value)
       * TEMOS A MSG QUE "Property VALUE not exist in EventTarget 
       * (que buscamos no console do chrome)
       * 
       * PARA RESOLVER O PROBLEMA PRECISAMOS USAR O:
       * (<HTMLInputElement>resposta.target) como abaixo:
       * OBS: trim() PARA IGNORAR ESPAÇOS ANTES E DPOIS DO TEXTO;
       */
		  this.resposta = ((<HTMLInputElement>resposta.target).value.trim())
    }

  public clearContents(element):void{
    element.value=""
  }


	verificarResposta(): void {
  
    // VERIFICAR SE A FRASE DIGITADA É CORRETA:
		if (this.rodadaFrase.frasePt == this.resposta) {
      alert("Tradução correta")
      

      if(this.rodada === 4) {
        this.encerrarJogo.emit('Vitória')
      }
      // TROCAR PERGUNTA DA RODADA
      this.rodada++
      
      //Atualiza Progresso
      this.progresso = this.progresso + 25 //(100/(this.frases.length))
      console.log(this.progresso)

      /* CADA FRASE SE RELACIONA COM AS RODADAS ==> 0,1,2,3... 
			 *  POR ISSO USAMOS O this.rodada */

      //ATUALIZA OBJETO RODADAFRASE
			this.rodadaFrase = this.frases[this.rodada]
      if(this.progresso == 100) {
        alert("parabens, voce ganhou")
        this.resposta = ''
        this.progresso = 0
      }
      //Limpar o campo de resposta
      this.resposta = ''

		} else {
      if(this.tentativas > 0) {
        alert("Tradução errada, tente novamente")
      
      
        //this.coracaoCheio = this.coracaoVazio
        //DECREMENTAR A VARIAVEL TENTATIVA
        this.tentativas--
      
      } else if(this.tentativas == 0){
        this.encerrarJogo.emit('derrota')
      }
    }
    console.log(this.tentativas)
  }
  
  
}  
