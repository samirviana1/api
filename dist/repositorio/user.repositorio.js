"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositorio = void 0;
const user_1 = require("../database/entities/user");
const pg_helper_1 = require("../database/pg-helper");
class UserRepositorio {
    async createUser(name, email, password) {
        const manager = pg_helper_1.pgHelper.client.manager;
        const newUser = manager.create(user_1.Users, {
            name,
            email,
            password,
        });
        return await manager.save(newUser);
    }
    async userExist(uidUser) {
        const manager = pg_helper_1.pgHelper.client.manager;
        const user = await manager.findOne(user_1.Users, {
            where: {
                uidUser,
            },
        });
        return !!user;
    }
    async userLogin(email, password) {
        const manager = pg_helper_1.pgHelper.client.manager;
        const user = await manager.findOne(user_1.Users, {
            where: { email, password },
        });
        return user;
    }
}
exports.UserRepositorio = UserRepositorio;
