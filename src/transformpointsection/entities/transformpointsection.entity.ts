import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transformpointsection {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Add: string



}
