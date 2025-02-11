import { ApiProperty } from "@nestjs/swagger";

export class CreateAboutsectionDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    image?: any;





}
