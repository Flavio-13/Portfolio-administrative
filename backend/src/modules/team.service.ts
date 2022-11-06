import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Members } from "src/entities/members.entity";
import { MemberInterface } from "src/interfaces/member.interface";
import { DeepPartial, Repository } from "typeorm";

@Injectable()
export class TeamService {

    constructor(
        @InjectRepository(Members)
        private MemberRepos : Repository<Members>
    ){}

    async save(member:MemberInterface) {
        return await this.MemberRepos.save(member as DeepPartial<Members>)
    }

    async update(member:MemberInterface) {
        return await this.MemberRepos.save(member as DeepPartial<Members>)
    }

    async findOne(member :MemberInterface){
        return await this.MemberRepos.findOne({
            where:{                
                idMember : member.idMember 
            }
        });
    }

    async findAll(){
        return await this.MemberRepos.find()
    }

    async delete(idMember: number){
        return await this.MemberRepos.delete(idMember);
    }
}