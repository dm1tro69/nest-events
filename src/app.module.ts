import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from "./events.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventEntity } from "./event.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'example',
    database: 'nest-events',
    entities: [EventEntity],
    synchronize: true
  }), TypeOrmModule.forFeature([EventEntity])],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}
