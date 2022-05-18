import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userExist = this.usersRepository.findById(user_id)
    if(!userExist){
      throw new Error('User no exist')
    }
   return this.usersRepository.turnAdmin(userExist)
  }
}

export { TurnUserAdminUseCase };
