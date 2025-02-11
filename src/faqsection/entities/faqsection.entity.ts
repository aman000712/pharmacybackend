import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Faqsection {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string


}
