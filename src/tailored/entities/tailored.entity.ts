import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Tailored {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @OneToOne(()=>Fileupload)
    image:Fileupload



}
