import { DtoInterface } from '@shared/model';
import {NumberplateDto} from "@numberplate/model";

export interface VehiculeDto extends DtoInterface{
  vehicule_id: string,
  dop: Date,
  active: string,
  price: string,
  num_chassis: string,
  brand: string,
  cde_carrosserie: string,
  genre: string,
  mom: string,
  mma: string,
  mmat: string,
  mta: string,
  classe_enviro: string,
  nbr_km: string,
  metrologie: string,
  picture: string,
  fuel: string,
  type: string,
  numberplate: NumberplateDto
}
