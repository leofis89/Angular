
//Importação do modulo, pego no node_modules @angular;
import {Component} from '@angular/core'


//Decorator para a classe, para dizer pro angular que é um componente
@Component({
  selector: 'app-topo', // Rótulo ==> instancia no template 
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})

export class TopoComponent 
{
  public titulo: string ='Aprendendo inglês'
} 