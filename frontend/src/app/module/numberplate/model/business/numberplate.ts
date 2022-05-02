import {Site} from "@site/model";

export interface Numberplate {
  numberplate_id: string,
  num_plate: string,
  dop: Date,
  active: string
  site: Site;
}
