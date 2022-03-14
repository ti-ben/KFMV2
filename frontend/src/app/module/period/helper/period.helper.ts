import { Period } from '@period/model/business';
import { PeriodDto } from '@period/model';

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
      period_id: '',
      start_date: '',
      end_date: ''
    };
  }
}
