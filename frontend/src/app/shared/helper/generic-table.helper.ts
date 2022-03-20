import { FieldDefinition, FieldType } from '@shared/model';

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
}
