import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Discoverpointsection {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Add: string



}
