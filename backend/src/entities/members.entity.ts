import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Members {
    @PrimaryGeneratedColumn()
    idMember: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({unsigned:true,})
    age: number;

    @Column()
    sexe: string;

    @Column()
    speciality: string;



    // @Column({ nullable: true, length: 12})
    // pswElec: string;

    // @Column()
    // nameElec: string;

    // @Column()
    // firstNElec: string;

    // @Column()
    // isMan: boolean;

    // @Column({default:null})
    // birthElec: Date;
}