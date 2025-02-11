import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Progressbar {

    @PrimaryGeneratedColumn()
    id: number


    @Column()
    Number: number

    @Column()
    label: string


}
