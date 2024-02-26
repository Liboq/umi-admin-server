import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  @InjectRepository(User)
  private userRepository: Repository<User>;

  // 增加
  create(createUserDto: CreateUserDto) {
    this.userRepository.save(createUserDto);
  }

  // 查找
  findAll() {
    return this.userRepository.find();
  }

  // 查找单个
  findOne(id: number) {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  // 修改
  update(id: number, updateUserDto: UpdateUserDto) {
    this.userRepository.save({
      id: id,
      ...updateUserDto,
    });
  }

  // 删除
  remove(id: number) {
    this.userRepository.delete(id);
  }
}
