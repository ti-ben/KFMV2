import { Status } from '@status/model/business';
import { StatusDto } from '@status/model';

export class statusHelper {
  public static fromDto(dto: StatusDto): Status {
    return {
      status_id: dto.status_id,
      name: dto.name,
      description: dto.description
    }
  }
  public toDto(status: Status): StatusDto {
    return {
      status_id: '',
      name: '',
      description: ''
    };
  }
}
