import { User } from '../common/models';

export class UserRepository {
    private userStorage;

    constructor(userStorage) {
        this.userStorage = userStorage;
    }

    public async getAll(): Promise<User[]> {
        const users = await this.userStorage.findAll();
        return users;
    }

    public async add(user: User) {
        await this.userStorage.build(user).save();
    }
}