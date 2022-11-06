import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Members } from './entities/members.entity';
import { TeamModule } from './modules/team.module';

@Module({
  imports: [
    TeamModule,
    TypeOrmModule.forRoot({
      type:"postgres",
      host:"localhost",
      port:5432,
      username:"postgres",
      password:"AMIM1102",
      database:"mouvance",
      entities:[Members],
      synchronize:true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
