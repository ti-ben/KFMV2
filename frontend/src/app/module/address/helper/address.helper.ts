import { Address } from '@address/model/business';
import { AddressDto } from '@address/model';
import {isNil} from 'lodash';
import {User} from "@user/model";
import {FormControl, FormGroup} from "@angular/forms";

export class AddressHelper {
  public static fromDto(dto: AddressDto): Address {
    if (isNil(dto))
      return AddressHelper.getEmpty();
    else
    return {
      address_id: dto.address_id,
      road: dto.road,
      cp: dto.cp,
      town: dto.town,
      country: dto.country,
      num: dto.num
    }
  }

  public static toDto(address: Address): AddressDto {
    return {
      address_id: address.address_id,
      road: address.road,
      cp: address.cp,
      town: address.town,
      country: address.country,
      num: address.num
    };
  }

  public static toFormGroup(address: Address = AddressHelper.getEmpty()): FormGroup {
    return new FormGroup({
      address_id: new FormControl(address.address_id),
      road: new FormControl(address.road),
      cp: new FormControl(address.cp),
      town: new FormControl(address.town),
      country: new FormControl(address.country),
      num: new FormControl(address.num)
    });
  }

  static getEmpty():Address {
    return {
      address_id: '',
      road: '',
      cp: '',
      town: '',
      country: '',
      num: ''
    };
  }

  static fromDtoArray(data: AddressDto[]): Address[] {
    return data.map((dto: AddressDto) => AddressHelper.fromDto(dto));
  }
}
