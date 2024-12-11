import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ modelName: 'user' })
export class User extends Model {
  @Column
  createdAt: Date;

  @Column
  updatedAt?: Date;

  @PrimaryKey
  @Column
  id: number;

  @Column
  login: string;

  @Column
  password: string;

  @Column
  admin: boolean;
}
