import * as Sequelize from "sequelize";
import User from "./User";

export default function create(sequelize: Sequelize.Sequelize) {
    const UserSchema = sequelize.define('user', User);

    return {
        User: UserSchema
    };
}