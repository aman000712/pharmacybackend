import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BannerSection {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string


}
