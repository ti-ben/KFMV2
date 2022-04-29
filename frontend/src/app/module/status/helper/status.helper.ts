import { Status } from '@status/model/business';
import { StatusDto } from '@status/model';
import {isNil} from 'lodash';
import {Site} from "@site/model";
import {SelectOption} from "@shared/model/select.config";
import {FormControl, FormGroup, Validators} from "@angular/forms";


export class StatusHelper {
  public static fromDto(dto: StatusDto): Status {
    if (isNil(dto)) {
      return StatusHelper.getEmpty();
    }
    return {
      status_id: dto.status_id,
      name: dto.name,
      description: dto.description,
      active: dto.active
    }
  }

  public static toDto(status: Status): StatusDto {
    return {
      status_id: status.status_id,
      name: status.name,
      description: status.description,
      active: status.active
    };
  }

  static getEmpty():Status {
    return {
      status_id: '',
      name: '',
      description: '',
      active: ''
    };
  }

  static fromDtoArray(data: StatusDto[]): Status[] {
    return data.map((dto: StatusDto) => StatusHelper.fromDto(dto));
  }

  public static toFormGroup(status: Status = StatusHelper.getEmpty()): FormGroup {
    return new FormGroup({
      status_id: new FormControl(status.status_id),
      name: new FormControl(status.name, [Validators.required]),
      description: new FormControl(status.description, [Validators.required]),
      active: new FormControl(status.active)
    });
  }

  static toStatusOptionArray(list: Status[]): SelectOption[] {
    return list.map((status: Status) => {
      return {value: status.status_id, label: status.name};
    })
  }
}
