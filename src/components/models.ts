export interface Simulation {
  valorApagar: number;
  taxaJuros: number;
  modalidadeCredito: string;
  instituicaoFinanceira: string;
}

export interface Simulations {
  id: number;
  cliente: string;
  valorSolicitado: number;
  qntParcelas: number;
  simulacoes: Simulation[] | string[];
}

export interface Rows {
  id: number;
  cliente: string;
  valorSolicitado: string;
  qntParcelas: number;
  simulacoes: Simulation[] | string[];
}
