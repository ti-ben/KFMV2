import { Site } from '@site/model/business';
import { SiteDto } from '@site/model';
import {Vehicule, VehiculeDto} from "@vehicule/model";

export class SiteHelper {
  public static fromDto(dto: SiteDto): Site {
    return {
      site_id: dto.site_id,
      name: dto.name,
      description: dto.description,
      created_on: dto.created_on
    }
  }

  public toDto(site: Site): SiteDto {
    return {
      site_id: site.site_id,
      name: site.name,
      description: site.description,
      created_on: new Date()
    };
  }

  static getEmpty(): Site {
    return {
      site_id: '',
      name: '',
      description: '',
      created_on: new Date()
    };
  }
  static fromDtoArray(data: SiteDto[]): Site[] {
    return data.map((dto: SiteDto) => SiteHelper.fromDto(dto));
  }
}
