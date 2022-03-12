import { User } from '@user/model/business';
import { UserDto } from '@user/model';

export class UserHelper {
  public static fromDto(dto: UserDto): User {
    return {
      actif: dto.actif,
      avatar: dto.avatar,
      cree_le: dto.cree_le,
      email: dto.email,
      genre: dto.genre,
      id: dto.id,
      lieu_naissance: dto.lieu_naissance,
      naissance: dto.dte_naissance,
      nationalite: dto.nationalite,
      nom: dto.nom,
      numirn: dto.numirn,
      permis: dto.permis,
      prenom: dto.prenom,
      telPro: dto.telpro,
      telperso: dto.telperso

    }
  }
  public toDto(user: User): UserDto {
    return {
      actif: user.actif,
      avatar: '',
      cree_le: undefined,
      dte_naissance: undefined,
      email: '',
      genre: '',
      id: '',
      lieu_naissance: '',
      nationalite: '',
      nom: '',
      numirn: '',
      permis: '',
      prenom: '',
      telperso: '',
      telpro: ''

    };
  }
}
