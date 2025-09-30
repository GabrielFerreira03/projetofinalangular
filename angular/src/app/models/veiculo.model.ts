export interface Veiculos extends Array<Veiculo> {}

export interface Veiculo{
img: any
  id: number | string
  vehicle: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
}

export interface VeiculosAPI {
  vehicles: Veiculos;
}

export interface VeiculoData{
  id:number;
  odometro: number;
  lat: number;
  long: number;
  status: string;
  nivelCombustivel:number;
}
