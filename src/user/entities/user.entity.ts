import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '姓名',
    length: 50,
  })
  name: string;

  @Column({
    comment: '密码',
    length: 50,
  })
  password: string;

  @Column({
    comment: '头像',
    length: 50,
  })
  avator: string;

  @Column({
    comment: '手机号',
    length: 50,
  })
  mobile: string;
}
