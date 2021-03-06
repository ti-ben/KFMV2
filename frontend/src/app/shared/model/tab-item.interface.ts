export interface TabItem{
  label:string;
  type:TabItemAction
}

export enum TabItemAction{
  USER_IDENTITY = 'USER_IDENTITY',
  USER_CAP = 'USER_CAP',
  USER_ADR = 'USER_ADR',
  USER_SELECTMED = 'USER_SELECTMED',
  USER_TACHOGRAPH = 'USER_TACHOGRAPH',
  USER_AUTORISATION = 'USER_AUTORISATION',
  USER_ADDRESS = 'USER_ADDRESS',
  VEHICULE_IDENTITY = 'VEHICULE_IDENTITY',
  VEHICULE_ADR = 'VEHICULE_ADR',
  VEHICULE_METROLOGY = 'VEHICULE_METROLOGY',
  VEHICULE_TECHNICAL_CONTROL = 'VEHICULE_TECHNICAL_CONTROL',
  VEHICULE_TECHNICAL_INTERVENTION = 'VEHICULE_TECHNICAL_INTERVENTION',
  VEHICULE_NUMBERPLATE = 'VEHICULE_NUMBERPLATE'
}
