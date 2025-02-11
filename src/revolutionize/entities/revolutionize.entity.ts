import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Revolutionize {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @OneToOne(()=> Fileupload)
    @JoinColumn()
    image: Fileupload



}
