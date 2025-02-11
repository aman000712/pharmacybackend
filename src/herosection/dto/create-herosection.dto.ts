import { ApiProperty } from "@nestjs/swagger";

export class CreateHerosectionDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    image?:any;




}
