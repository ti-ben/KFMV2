import {SelectOption} from '@shared/model/select.config';
import {GenreEnum} from '@shared/model';

export class GenreHelper {
  static toSelectOption(): SelectOption[] {
    return [
      {label: 'genre.colis', value: GenreEnum.COLIS},
      {label: 'genre.citerne', value: GenreEnum.CITERNE}
    ]
  }
}
