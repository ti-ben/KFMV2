import { Status } from '@status/model/business';
import { StatusDto } from '@status/model';


export class StatusHelper {
  public static fromDto(dto: StatusDto): Status {
    return {
      status_id: dto.status_id,
      name: dto.name,
      description: dto.description
    }
  }

  public static toDto(status: Status): StatusDto {
    return {
      status_id: status.status_id,
      name: status.name,
      description: status.description
    };
  }

  static getEmpty():Status {
    return {
      status_id: '',
      name: '',
      description: ''
    };
  }

  static fromDtoArray(data: StatusDto[]): Status[] {
    return data.map((dto: StatusDto) => StatusHelper.fromDto(dto));
  }
}
