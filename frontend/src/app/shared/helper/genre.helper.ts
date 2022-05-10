import {SelectOption} from '@shared/model/select.config';
import {GenreEnum} from '@shared/model';

export class GenreHelper {
  static toSelectOption(): SelectOption[] {
    return [
      {label: 'type.colis', value: GenreEnum.COLIS},
      {label: 'type.citerne', value: GenreEnum.CITERNE},
      {label: 'type.citerne_colis', value: GenreEnum.CITERNE_OR_COLIS}
    ]
  }
}
