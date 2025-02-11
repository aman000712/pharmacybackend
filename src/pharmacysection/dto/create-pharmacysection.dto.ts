import { ApiProperty } from "@nestjs/swagger";

export class CreatePharmacysectionDto {


    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string; 

    @ApiProperty()
    image?: any;


}
