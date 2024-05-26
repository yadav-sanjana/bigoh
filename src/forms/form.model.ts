import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Form extends Model {
  @Column
  uniqueld: string;

  @Column
  title: string;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  phonenumber: number;

  @Column
  isGraduate: boolean;
}
