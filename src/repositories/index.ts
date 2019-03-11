import { UserRepository } from './user.repository';

export default function create(storage) {
    const userRepository = new UserRepository(storage.user);

    return {
        userRepository
    };
}