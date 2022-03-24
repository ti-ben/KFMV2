export interface TabItem{
  label:string;
  type:TabItemAction
}

export enum TabItemAction{
  USER_IDENTITY = 'USER_IDENTITY',
  USER_CAP = 'USER_CAP',
  USER_ADR = 'USER_ADR',
  USER_SELECTMED = 'USER_SELECTMED',
  USER_TACHOGRAPH = 'USERTACHOGRAPH'
}
