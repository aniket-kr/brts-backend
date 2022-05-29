import mongoose from 'mongoose';

export enum TitleTypes {
  worker = 'WORKER',
  driver = 'DRIVER',
  conductor = 'CONDUCTOR',
  staff = 'STAFF',
  supervisor = 'SUPERVISOR',
}

export interface IEmployeeType {
  title: TitleTypes;
}

export type IEmployeeTypeModel = mongoose.Model<IEmployeeType, {}, {}>;
