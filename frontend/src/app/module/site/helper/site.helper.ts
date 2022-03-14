import { Site } from '@site/model/business';
import { SiteDto } from '@site/model';

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
      site_id: '',
      name: '',
      description: '',
      created_on: ''
    };
  }
}
