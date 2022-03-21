import {Vehicule} from '@vehicule/model/business';
import {VehiculeDto} from '@vehicule/model';

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
      type: dto.type
    }
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
      type: vehicule.type
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
      type: ''
    };
  }

  static fromDtoArray(data: VehiculeDto[]): Vehicule[] {
    return data.map((dto: VehiculeDto) => VehiculeHelper.fromDto(dto));
  }
}
