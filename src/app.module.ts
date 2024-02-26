import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { RoomModule } from './room/room.module';
import { Room } from './room/entities/room.entity';
import { RoomCategoryModule } from './room_category/room_category.module';
import { RoomCategory } from './room_category/entities/room_category.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Lbq17607384217',
      database: 'umiadmin',
      synchronize: true,
      logging: true,
      entities: [User,Room,RoomCategory],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    RoomModule,
    RoomCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
