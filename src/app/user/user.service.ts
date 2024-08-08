import { User } from '../database/models/user';

export class UserService {
  async getById(id: number): Promise<User | null> {
    return User.findOne({ where: { id } });
  }

  async getByLogin(login: string): Promise<User | null> {
    return User.findOne({ where: { login } });
  }
}
