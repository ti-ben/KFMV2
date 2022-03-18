export interface GenericTableConfig {
  data: any[];
  fields: FieldDefinition[];
}

export interface FieldDefinition {
  icon?: string;
  translateKey: string;
  field: string;
  type: FieldType;
}

export enum FieldType {
  STRING = 'STRING',
  IMAGE = 'IMAGE',
  DATE = 'DATE'
}
