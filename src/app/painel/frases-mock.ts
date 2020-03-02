/**
 * MOCK ==> é um cara capaz de simular o comportamento de 
 * um componente, tornando possível você testar um outro
 * componente isoladamente.
 * 
 * COMO NÃO TEMOS UM DB, USAMOS O MOCK PARA ARMAZENAR NOSSOS
 * DADOS E RECUPERALOS NO TEMPLATE;
 */


import { Frase } from "../shared/frase.model";

export const FRASES: Frase[] = [
  { fraseEng: 'I am hungry' , frasePt:'Estou com fome'},
  { fraseEng: 'How are you?' , frasePt:'Como vai voce?'},
  { fraseEng: 'Help me' , frasePt:'Ajude me'},
  { fraseEng: 'Son of a bitch' , frasePt:'Filho da puta'}
];

