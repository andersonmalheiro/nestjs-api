import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  public create(createUserDto: CreateUserDTO) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  public findAll() {
    return this.userRepository.find();
  }

  public findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  public update(id: number, updateUserDto: UpdateUserDTO) {
    return this.userRepository.update(+id, updateUserDto);
  }

  public remove(id: number) {
    return this.userRepository.delete(+id);
  }
}
