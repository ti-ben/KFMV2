import {Period} from '@period/model/business';
import {PeriodDto} from '@period/model';

export class PeriodHelper {
  public static fromDto(dto: PeriodDto): Period {
    return {
      period_id: dto.period_id,
      start_date: dto.start_date,
      end_date: dto.end_date
    }
  }

  public toDto(period: Period): PeriodDto {
    return {
      period_id: period.period_id,
      start_date: new Date("dd/MM/yyyy"),
      end_date: new Date("dd/MM/yyyy")
    };
  }

  static getEmpty(): Period {
    return {
      period_id: '',
      start_date: new Date("dd/MM/yyyy"),
      end_date: new Date("dd/MM/yyyy")
    };
  }

  static fromDtoArray(data: PeriodDto[]): Period[] {
    return data.map((dto: PeriodDto) => PeriodHelper.fromDto(dto));
  }
}
