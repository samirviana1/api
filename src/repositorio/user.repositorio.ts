import {Users} from "../database/entities/user";
import {pgHelper} from "../database/pg-helper";

export class UserRepositorio {
  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<Users> {
    const manager = pgHelper.client.manager;
    const newUser = manager.create(Users, {
      name,
      email,
      password,
    });
    return await manager.save(newUser);
  }

  async userExist(uidUser: string): Promise<boolean> {
    const manager = pgHelper.client.manager;
    const user = await manager.findOne(Users, {
      where: {
        uidUser,
      },
    });
    return !!user;
  }

  async userLogin(email: string, password: string): Promise<Users | null> {
    const manager = pgHelper.client.manager;
    const user = await manager.findOne(Users, {
      where: {email, password},
    });
    return user;
  }
}
