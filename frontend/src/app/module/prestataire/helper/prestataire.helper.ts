import {Prestataire} from '@prestataire/model/business';
import {PrestataireDto} from '@prestataire/model';

export class PrestataireHelper {
  public static fromDto(dto: PrestataireDto): Prestataire {
    return {
      prestataire_id: dto.prestataire_id,
      name: dto.name,
      tel: dto.tel,
      email: dto.email,
      service: dto.service
    }
  }

  public toDto(prestataire: Prestataire): PrestataireDto {
    return {
      prestataire_id: prestataire.prestataire_id,
      name: prestataire.name,
      tel: prestataire.tel,
      email: prestataire.email,
      service: prestataire.service
    };
  }

  static getEmpty(): Prestataire {
    return {
      prestataire_id: '',
      name: '',
      tel: '',
      email: '',
      service: ''
    };
  }

  static fromDtoArray(data: PrestataireDto[]): Prestataire[] {
    return data.map((dto: PrestataireDto) => PrestataireHelper.fromDto(dto));
  }
}
