import {Vehicule} from '@vehicule/model/business';
import {VehiculeDto} from '@vehicule/model';
import {NumberplateHelper} from '@numberplate/helper'
import {FormControl, FormGroup} from "@angular/forms";
import {SiteHelper} from "@site/helper";
import {isNil} from "lodash";

export class VehiculeHelper {
  public static fromDto(dto: VehiculeDto): Vehicule {
    if (isNil(dto)) {
      return VehiculeHelper.getEmpty();
    }
    return {
      vehicule_id: dto.vehicule_id,
      dop: dto.dop,
      active: dto.active,
      price: dto.price,
      num_chassis: dto.num_chassis,
      brand: dto.brand,
      cde_carrosserie: dto.cde_carrosserie,
      genre: dto.genre,
      mom: dto.mom,
      mma: dto.mma,
      mmat: dto.mmat,
      mta: dto.mta,
      classe_enviro: dto.classe_enviro,
      nbr_km: dto.nbr_km,
      metrologie: dto.metrologie,
      picture: dto.picture,
      fuel: dto.fuel,
      type: dto.type,
      numberplate: NumberplateHelper.fromDto(dto.numberplate),
      site: SiteHelper.fromDto(dto.site)
    }
  }

  public static toFormGroup(vehicule: Vehicule = VehiculeHelper.getEmpty()): FormGroup {
    return new FormGroup({
      brand: new FormControl(vehicule.brand),
      genre: new FormControl(vehicule.genre),
      dop: new FormControl(vehicule.dop),
      cde_carrosserie: new FormControl(vehicule.cde_carrosserie),
      price: new FormControl(vehicule.price),
      num_chassis: new FormControl(vehicule.num_chassis),
      classe_enviro: new FormControl(vehicule.classe_enviro),
      metrologie: new FormControl(vehicule.metrologie),
      picture: new FormControl(vehicule.picture),
      nbr_km: new FormControl(vehicule.nbr_km),
      fuel: new FormControl(vehicule.fuel),
      type: new FormControl(vehicule.type),
      mom: new FormControl(vehicule.mom),
      mma: new FormControl(vehicule.mma),
      mmat: new FormControl(vehicule.mmat),
      mta: new FormControl(vehicule.mta),
      active: new FormControl(vehicule.active),
      nump_late: new FormControl(vehicule.numberplate),
      site: new FormControl(vehicule.site)
    });
  }

  public toDto(vehicule: Vehicule): VehiculeDto {
    return {
      vehicule_id: vehicule.vehicule_id,
      dop: new Date(),
      active: vehicule.active,
      price: vehicule.price,
      num_chassis: vehicule.num_chassis,
      brand: vehicule.brand,
      cde_carrosserie: vehicule.cde_carrosserie,
      genre: vehicule.genre,
      mom: vehicule.mom,
      mma: vehicule.mma,
      mmat: vehicule.mmat,
      mta: vehicule.mta,
      classe_enviro: vehicule.classe_enviro,
      nbr_km: vehicule.nbr_km,
      metrologie: vehicule.metrologie,
      picture: vehicule.picture,
      fuel: vehicule.fuel,
      type: vehicule.type,
      numberplate: NumberplateHelper.toDto(vehicule.numberplate),
      site: SiteHelper.toDto(vehicule.site)
    };
  }

  static getEmpty(): Vehicule {
    return {
      vehicule_id: '',
      dop: new Date(),
      active: '',
      price: '',
      num_chassis: '',
      brand: '',
      cde_carrosserie: '',
      genre: '',
      mom: '',
      mma: '',
      mmat: '',
      mta: '',
      classe_enviro: '',
      nbr_km: '',
      metrologie: '',
      picture: '',
      fuel: '',
      type: '',
      numberplate: NumberplateHelper.getEmpty(),
      site: SiteHelper.getEmpty()
    };
  }

  static fromDtoArray(data: VehiculeDto[]): Vehicule[] {
    return data.map((dto: VehiculeDto) => VehiculeHelper.fromDto(dto));
  }
}
