import { Address } from '@address/model/business';
import { AddressDto } from '@address/model';


export class AddressHelper {
  public static fromDto(dto: AddressDto): Address {
    return {
      address_id: dto.addres_id,
      road: dto.road,
      cp: dto.cp,
      town: dto.town,
      country: dto.country,
      num: dto.num
    }
  }
  public toDto(address: Address): AddressDto {
    return {
      address_id: '',
      road: '',
      cp: '',
      town: '',
      country: '',
      num: ''
    };
  }
}