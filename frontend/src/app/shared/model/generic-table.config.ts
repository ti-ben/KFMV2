import {MenuItem} from '@shared/model/menu-item.interface';

export interface GenericTableConfig {
  data: any[];
  fields: FieldDefinition[];
  actions?: MenuItem[]
}

export interface FieldDefinition {
  icon?: string;
  translateKey: string;
  field: string;
  type: FieldType
}

export enum FieldType {
  STRING = 'STRING',
  IMAGE = 'IMAGE',
  DATE = 'DATE'
}
