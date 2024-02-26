import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { RoomCategory } from 'src/room_category/entities/room_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Room,RoomCategory])],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
