import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { RoomCategory } from 'src/room_category/entities/room_category.entity';

@Injectable()
export class RoomService {
  @InjectEntityManager()
  private manager: EntityManager;

  @InjectRepository(Room)
  private roomRepository: Repository<Room>;

  @InjectRepository(Room)
  private categoryRepository: Repository<RoomCategory>;
  async create(createRoomDto) {
    const res = await this.roomRepository.save(createRoomDto);
    return res;
  }

  async findAll() {
    return this.roomRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
