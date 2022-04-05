import {Vehicule} from '@vehicule/model/business';
import {VehiculeDto} from '@vehicule/model';
import {NumberplateHelper} from '@numberplate/helper'
import {FormControl, FormGroup, Validators} from "@angular/forms";

export class VehiculeHelper {
  public static fromDto(dto: VehiculeDto): Vehicule {
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
      numberplate: NumberplateHelper.fromDto(dto.numberplate)
    }
  }

  public static toFormGroup(vehicule: Vehicule = VehiculeHelper.getEmpty()): FormGroup {
    return new FormGroup({
      brand: new FormControl(vehicule.brand, [Validators.required]),
      genre: new FormControl(vehicule.genre, [Validators.required]),
      dop: new FormControl(vehicule.dop, [Validators.required]),
      cde_carrosserie: new FormControl(vehicule.cde_carrosserie, [Validators.required]),
      price: new FormControl(vehicule.price, [Validators.required]),
      num_chassis: new FormControl(vehicule.num_chassis, [Validators.required]),
      classe_enviro: new FormControl(vehicule.classe_enviro, [Validators.required]),
      metrologie: new FormControl(vehicule.metrologie, [Validators.required]),
      picture: new FormControl(vehicule.picture),
      nbr_km: new FormControl(vehicule.nbr_km, [Validators.required]),
      fuel: new FormControl(vehicule.fuel, [Validators.required]),
      type: new FormControl(vehicule.type, [Validators.required]),
      mom: new FormControl(vehicule.mom, [Validators.required]),
      mma: new FormControl(vehicule.mma, [Validators.required]),
      mmat: new FormControl(vehicule.mmat, [Validators.required]),
      mta: new FormControl(vehicule.mta, [Validators.required]),
      active: new FormControl(vehicule.active, [Validators.required]),
      nump_late: new FormControl(vehicule.numberplate.num_plate, [Validators.required])
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
      numberplate: NumberplateHelper.toDto(vehicule.numberplate)
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
      numberplate: NumberplateHelper.getEmpty()
    };
  }

  static fromDtoArray(data: VehiculeDto[]): Vehicule[] {
    return data.map((dto: VehiculeDto) => VehiculeHelper.fromDto(dto));
  }
}
