import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Members } from "src/entities/members.entity";
import { TeamController } from "./team.controller";
import { TeamService } from "./team.service";

@Module({
    imports:[TypeOrmModule.forFeature([Members])],
    controllers:[TeamController],
    providers:[TeamService]
})

export class TeamModule {}