import {Numberplate} from "@numberplate/model";
import {Site} from "@site/model";

export interface Vehicule {
  vehicule_id: string,
  dop: Date,
  active: string;
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
  numberplate: Numberplate,
  site: Site
}
