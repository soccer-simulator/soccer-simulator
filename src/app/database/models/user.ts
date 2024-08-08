import { Optional } from 'sequelize';
import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

interface UserAttributes {
  createdAt: Date;
  updatedAt?: Date;
  id: number;
  login: string;
  password: string;
  admin: boolean;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table({ modelName: 'user' })
export class User extends Model<UserAttributes, UserCreationAttributes> {
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
