import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Pricingplan {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    planname: string

    @Column()
    montlyprice: number

    @Column()
    yearlyprice: number

    @Column()
    features: string



}
