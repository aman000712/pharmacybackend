import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Testimonialssection {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    clientname: string

    @Column()
    position: string

    @Column()
    testimonial: string

    @OneToOne(()=>Fileupload)
    @JoinColumn()
    testimonialimage: Fileupload


}
