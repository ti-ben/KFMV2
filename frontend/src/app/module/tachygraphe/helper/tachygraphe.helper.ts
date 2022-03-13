import { Tachygraphe } from '@tachygraphe/model/business';
import { TachygrapheDto } from '@tachygraphe/model';

export class  TachygrapheHelper
{
  public static fromDto(dto: TachygrapheDto): Tachygraphe  {
    return {
      tachygraphe_id: dto.tachygraphe_id,
      start_date: dto.start_date,
      end_date: dto.end_date,
      num_carte: dto.num_carte,
      comment: dto.comment
    }
  }

  public toDto(tachygraphe: Tachygraphe): TachygrapheDto  {
    return {
      tachygraphe_id: '',
      start_date: '',
      end_date: '',
      num_carte: '',
      comment: ''
    };
  }
}
