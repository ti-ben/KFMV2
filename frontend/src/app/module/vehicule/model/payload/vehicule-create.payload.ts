import { PayloadInterface } from '@shared/model';

export interface VehiculeCreatePayload extends PayloadInterface {
  dop: Date;
  active: boolean;
  price: string;
  num_chassis: string;
  brand: string;
  cde_carrosserie: string
  genre: string;
  mom: string;
  mma: string;
  mmat: string;
  mta: string;
  classe_enviro: string;
  nbr_km: string;
  metrologie: string;
  picture: string;
  fuel: string;
  type: string;
}
