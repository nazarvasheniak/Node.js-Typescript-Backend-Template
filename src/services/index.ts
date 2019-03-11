import { UserService } from './user.service';


export default function create(repositories) {
    const userService = new UserService(repositories.userRepository);

    return {
        userService
    };
}