import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Form } from '../forms/form.model';

@Table
export class Data extends Model {
  @ForeignKey(() => Form)
  @Column
  formId: number;

  @Column
  uniqueld: string;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  phonenumber: number;

  @Column
  isGraduate: boolean;
}
