import Sequelize from 'sequelize';
import entities from "./entities";
import config from "../common/configuration";

export default class Storage {
    private sequelize: Sequelize.Sequelize = new Sequelize(config.sequelize.connectionString, config.sequelize.options);
    private entities: {};

    constructor() {
        this.init();
    }

    private init() {
        this.entities = entities(this.sequelize);
        this.sync(false);
    }

    private sync(force: boolean) {
        return this.sequelize.sync({ force });
    }

    private close() {
        return this.sequelize.close();
    }

    public getModels() {
        return this.entities;
    }
}