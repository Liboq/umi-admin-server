import { RoomCategory } from 'src/room_category/entities/room_category.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity({
  name: 'room',
})
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '房间名',
    length: 50,
  })
  name: string;

  @Column({
    comment: '状态',
  })
  status: number;

  @Column({
    comment: '价格',
  })
  price: number;

  @Column({
    comment: '类型',
  })
  typeId: number;

  @Column({
    comment: '描述',
    length: 50,
  })
  description: string;
}
