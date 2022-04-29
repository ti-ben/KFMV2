import {Site} from '@site/model/business';
import {SiteDto} from '@site/model';
import {isNil} from 'lodash';
import {SelectOption} from '@shared/model/select.config';
import {FormControl, FormGroup, Validators} from "@angular/forms";

export class SiteHelper {
  public static fromDto(dto: SiteDto): Site {
    if (isNil(dto)) {
      return SiteHelper.getEmpty();
    }
    return {
      site_id: dto.site_id,
      name: dto.name,
      description: dto.description,
      created_on: dto.created_on,
      active: dto.active
    }
  }

  public static toDto(site: Site): SiteDto {
    return {
      site_id: site.site_id,
      name: site.name,
      description: site.description,
      created_on: new Date(),
      active: site.active
    };
  }

  static getEmpty(): Site {
    return {
      site_id: '',
      name: '',
      description: '',
      created_on: new Date("dd/MM/yyyy"),
      active : ''
    };
  }

  static fromDtoArray(data: SiteDto[]): Site[] {
    return data.map((dto: SiteDto) => SiteHelper.fromDto(dto));
  }

  public static toFormGroup(site: Site = SiteHelper.getEmpty()): FormGroup {
    return new FormGroup({
      site_id: new FormControl(site.site_id),
      name: new FormControl(site.name, [Validators.required]),
      description: new FormControl(site.description, [Validators.required]),
      created_on: new FormControl(new Date()),
      active: new FormControl(site.active, [Validators.required])
    });
  }

  static toSiteOptionArray(list: Site[]): SelectOption[] {
    return list.map((site: Site) => {
      return {value: site.site_id, label: site.name};
    })
  }
}
