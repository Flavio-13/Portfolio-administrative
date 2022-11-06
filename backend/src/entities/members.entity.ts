/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Members {
    @PrimaryGeneratedColumn()
    idMember: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ nullable: false })
    password: string;

    @Column({unsigned:true,})
    age: number;

    @Column()
    sexe: string;

    @Column()
    speciality: string;
}