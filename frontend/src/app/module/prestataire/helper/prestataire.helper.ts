import {Prestataire} from '@prestataire/model/business';
import {PrestataireDto} from '@prestataire/model';
import {Site} from "@site/model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PrestataireService} from "@prestataire/service/prestataire.service";

export class PrestataireHelper {
  public static fromDto(dto: PrestataireDto): Prestataire {
    return {
      prestataire_id: dto.prestataire_id,
      name: dto.name,
      tel: dto.tel,
      email: dto.email,
      service: dto.service,
      active: dto.active
    }
  }

  public toDto(prestataire: Prestataire): PrestataireDto {
    return {
      prestataire_id: prestataire.prestataire_id,
      name: prestataire.name,
      tel: prestataire.tel,
      email: prestataire.email,
      service: prestataire.service,
      active: prestataire.active
    };
  }

  static getEmpty(): Prestataire {
    return {
      prestataire_id: '',
      name: '',
      tel: '',
      email: '',
      service: '',
      active: ''
    };
  }

  static fromDtoArray(data: PrestataireDto[]): Prestataire[] {
    return data.map((dto: PrestataireDto) => PrestataireHelper.fromDto(dto));
  }

  public static toFormGroup(prestataire: Prestataire = PrestataireHelper.getEmpty()): FormGroup {
    return new FormGroup({
      prestataire_id: new FormControl(prestataire.prestataire_id),
      name: new FormControl(prestataire.name, [Validators.required]),
      tel: new FormControl(prestataire.tel, [Validators.required]),
      email: new FormControl(prestataire.email, [Validators.required]),
      service: new FormControl(prestataire.service, [Validators.required]),
      active: new FormControl(prestataire.active)
    });
  }

}
