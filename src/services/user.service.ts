import { User } from '../common/models';
import { UserRepository } from '../repositories/user.repository';

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async getAllUser(): Promise<User[]> {
        const users = await this.userRepository.getAll();
        return users;
    }

    public async createUser(user: User) {
        await this.userRepository.add(user);
    }
}