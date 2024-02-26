import { Injectable } from '@nestjs/common';
import { CreateRoomCategoryDto } from './dto/create-room_category.dto';
import { UpdateRoomCategoryDto } from './dto/update-room_category.dto';
import { RoomCategory } from './entities/room_category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoomCategoryService {
  @InjectRepository(RoomCategory)
  private roomRepository: Repository<RoomCategory>;

  create(createRoomCategoryDto: CreateRoomCategoryDto) {
    return 'This action adds a new roomCategory';
  }

  findAll() {
    return this.roomRepository.find();

  }

  findOne(id: number) {
    return `This action returns a #${id} roomCategory`;
  }

  update(id: number, updateRoomCategoryDto: UpdateRoomCategoryDto) {
    return `This action updates a #${id} roomCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} roomCategory`;
  }
}
