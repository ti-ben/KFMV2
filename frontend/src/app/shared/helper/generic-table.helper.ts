import {FieldDefinition, FieldType} from '@shared/model';

export class GenericTableHelper {
  public static genUserFieldDefinitions(): FieldDefinition[] {
    return [
      {
        icon: 'fa-image',
        translateKey: 'table.employee.',
        field: 'avatar',
        type: FieldType.IMAGE
      },
      {
        translateKey: 'table.employee.',
        field: 'firstname',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.employee.',
        field: 'lastname',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.employee.',
        field: 'gender',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.employee.',
        field: 'dob',
        type: FieldType.DATE
      }
    ]

  }

  public static genVehiculeFieldDefinitions(): FieldDefinition[] {
    return [
      {
        icon: 'fa-image',
        translateKey: 'table.vehicule.',
        field: 'picture',
        type: FieldType.IMAGE
      },
      {
        translateKey: 'table.vehicule.',
        field: 'brand',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.vehicule.',
        field: 'price',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.vehicule.',
        field: 'type',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.vehicule.',
        field: 'active',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.vehicule.',
        field: 'dop',
        type: FieldType.DATE
      }
    ]

  }

  public static genSiteFieldDefinitions(): FieldDefinition[] {
    return [
      {
        icon: 'fa-image',
        translateKey: 'table.site.',
        field: 'name',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.site.',
        field: 'description',
        type: FieldType.STRING
      }
    ]

  }

  public static genGradeFieldDefinitions(): FieldDefinition[] {
    return [
      {
        icon: 'fa-image',
        translateKey: 'table.grade.',
        field: 'name',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.grade.',
        field: 'comment',
        type: FieldType.STRING
      }
    ]

  }

  public static genStatusFieldDefinitions(): FieldDefinition[] {
    return [
      {
        icon: 'fa-image',
        translateKey: 'table.status.',
        field: 'name',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.status.',
        field: 'description',
        type: FieldType.STRING
      }
    ]

  }

  public static genNumberplateFieldDefinitions(): FieldDefinition[] {
    return [
      {
        icon: 'fa-image',
        translateKey: 'table.numberplate.',
        field: 'num_plate',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.numberplate.',
        field: 'dop',
        type: FieldType.DATE
      }
    ]

  }

  public static genPrestataireFieldDefinitions(): FieldDefinition[] {
    return [
      {
        icon: 'fa-image',
        translateKey: 'table.prestataire.',
        field: 'name',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.prestataire.',
        field: 'tel',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.prestataire.',
        field: 'email',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.prestataire.',
        field: 'service',
        type: FieldType.STRING
      }
    ]

  }

  public static genTachygrapheFieldDefinitions(): FieldDefinition[] {
    return [
      {
        translateKey: 'table.tachygraphe.',
        field: 'start_date',
        type: FieldType.DATE
      },
      {
        translateKey: 'table.tachygraphe.',
        field: 'end_date',
        type: FieldType.DATE
      },
      {
        translateKey: 'table.tachygraphe.',
        field: 'num_carte',
        type: FieldType.STRING
      },
      {
        translateKey: 'table.tachygraphe.',
        field: 'comment',
        type: FieldType.STRING
      }
    ]

  }
}
