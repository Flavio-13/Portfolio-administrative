/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Members } from "src/entities/members.entity";
import { LoginMemberI } from "src/interfaces/login.interface";
import { MemberInterface } from "src/interfaces/member.interface";
import { TeamService } from "./team.service";

@Controller("team")
export class TeamController {

    constructor(
        private teamServ : TeamService
    ){}

    @Get("/")
    hello() {
        return "Salut le monde"
    }

    @Post("save")
    async saveMember(@Body() member:MemberInterface):Promise<Members> {                
        return await this.teamServ.save(member);
    }

    @Post("update")
    async updateMember(@Body() member:MemberInterface):Promise<Members> {       
        return await this.teamServ.save(member);
    }

    @Get("findAll")
    async findAll(): Promise<Members[]> {
        return await this.teamServ.findAll()
    }

    @Get("delete/:idMember")
    async delete(@Param() idMmeber:number){
        console.log(idMmeber);
        return await this.teamServ.delete(idMmeber);
    }

    @Post('login')
    async loginMember(@Body() loginData: LoginMemberI): Promise<Members> {
        const resultSearch = await this.teamServ.loginMember(loginData.lastname);
        if (resultSearch != null) {
            console.log('Login reussi !!');
            return await this.teamServ.searchWithPass(loginData.lastname, loginData.password);    
        }

        return null;
    }



}